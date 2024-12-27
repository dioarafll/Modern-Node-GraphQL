import { generateToken, verifyToken } from '../jwt.util';
import jwt from 'jsonwebtoken';

// Mocking logger to avoid console logging during tests
jest.mock('../../config/logger', () => ({
  logger: {
    info: jest.fn(),
    error: jest.fn(),
  },
}));

describe('JWT Utility', () => {
  const mockPayload = { id: 'userId', role: 'user' };
  const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
  const EXPIRED_TOKEN = jwt.sign(mockPayload, JWT_SECRET, { expiresIn: '-1h' }); // Expired token

  describe('generateToken', () => {
    it('should generate a valid JWT token', () => {
      const token = generateToken(mockPayload);

      expect(typeof token).toBe('string');
      expect(token).toBeTruthy();

      // Verify the token to ensure it's valid
      const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
      expect(decoded.id).toBe(mockPayload.id);
      expect(decoded.role).toBe(mockPayload.role);
    });

    it('should throw an error if JWT_SECRET is missing', () => {
      // Create a spy to mock jwt.sign behavior
      const signSpy = jest.spyOn(jwt, 'sign').mockImplementation(() => {
        throw new Error('Missing JWT secret');
      });

      expect(() => generateToken(mockPayload)).toThrow('Token generation failed');

      // Restore the original jwt.sign implementation
      signSpy.mockRestore();
    });
  });

  describe('verifyToken', () => {
    it('should verify a valid JWT token', () => {
      const token = generateToken(mockPayload);
      const decoded = verifyToken(token);

      expect(typeof decoded).toBe('object');
      expect((decoded as jwt.JwtPayload).id).toBe(mockPayload.id);
      expect((decoded as jwt.JwtPayload).role).toBe(mockPayload.role);
    });

    it('should throw an error for an expired token', () => {
      expect(() => verifyToken(EXPIRED_TOKEN)).toThrow('Token verification failed');
    });

    it('should throw an error for an invalid token', () => {
      const invalidToken = 'invalid.token.string';
      expect(() => verifyToken(invalidToken)).toThrow('Token verification failed');
    });
  });
});



// src/routes/auth.routes.ts

import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller';

const router = Router();

/**
 * @route POST /api/auth/signup
 * @desc Mendaftarkan pengguna baru
 * @access Public
 */
router.post('/signup', signUp);

/**
 * @route POST /api/auth/signin
 * @desc Login pengguna yang sudah terdaftar
 * @access Public
 */
router.post('/signin', signIn);

export default router;

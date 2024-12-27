import { helts } from '../data/helts'; // Asumsi data simulasi

export const heltResolver = {
  Query: {
    getHelt: (_: any, { id }: { id: string }) => {
      return helts.find(helt => helt.id === id) || null;
    },
    getAllHelts: () => {
      return helts;
    },
  },
  Mutation: {
    createHelt: (_: any, { name, description }: { name: string; description?: string }) => {
      const newHelt = {
        id: (helts.length + 1).toString(),
        name,
        description: description || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      helts.push(newHelt);
      return newHelt;
    },
    updateHelt: (_: any, { id, name, description }: { id: string; name?: string; description?: string }) => {
      const helt = helts.find(helt => helt.id === id);
      if (!helt) return null;

      helt.name = name || helt.name;
      helt.description = description || helt.description;
      helt.updatedAt = new Date().toISOString();

      return helt;
    },
    deleteHelt: (_: any, { id }: { id: string }) => {
      const index = helts.findIndex(helt => helt.id === id);
      if (index === -1) return false;

      helts.splice(index, 1);
      return true;
    },
  },
};

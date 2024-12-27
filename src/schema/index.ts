import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
//import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

// Memuat semua file .graphql dari folder schemas
const typesArray = loadFilesSync(`./**/*.graphql`, {
  // Anda tidak perlu menyertakan properti loaders di sini
  // GraphQLFileLoader sudah menjadi loader default.
  // loaders: [new GraphQLFileLoader()]
});

// Gabungkan semua schema
const typeDefs = mergeTypeDefs(typesArray);

export { typeDefs };


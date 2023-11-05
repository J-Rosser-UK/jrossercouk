// // import { type SchemaTypeDefinition } from 'sanity'

// // export const schema: { types: SchemaTypeDefinition[] } = {
// //   types: [],
// // }


// import { type SchemaTypeDefinition } from 'sanity';
// import author from '../schemas/author';
// import heroe from '../schemas/heroe';
// // import index from '../schemas/index'
// import job from '../schemas/job';
// import post from '../schemas/post';
// import profile from '../schemas/profile';
// import project from '../schemas/project';
// // import any other schemas you have

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [
//     // add references to the imported schema objects here
//     author,
//     heroe,
//     job,
//     post,
//     profile,
//     project
//     // any other schemas
 

//   ]
// }


// // schemas/index.ts

// // import job from "./job";
// // import profile from "./profile";
// // import project from "./project";
// // import post from "./post";
// // import author from "./author";
// // import heroe from "./heroe";

// // export const schemaTypes = [profile, job, project, post, author, heroe];


// schema.ts

import { type SchemaTypeDefinition } from 'sanity';
import { schemaTypes } from '../schemas'; // assuming the schemas folder is in the same directory as schema.ts

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes // This is the array from your schemas/index.ts file
};

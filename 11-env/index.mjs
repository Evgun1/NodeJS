import { config } from 'dotenv';
config();

// // Imports entire module including default exoirt
// import dotenv from 'dotenv';
// dotenv.config();

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORLD);
console.log(process.env.DB_URL);

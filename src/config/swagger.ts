// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
// import { Express } from "express";

// const options = {
//   definition: {
//     openapi: "3.0.0",

//     info: {
//       title: "Identity Service API",
//       version: "1.0.0",
//       description: "Identity & Tenant Management Service",
//     },

//     servers: [
//       {
//         url: "http://localhost:5000/api/v1",
//       },
//     ],

//     components: {
//       securitySchemes: {
//         BearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },

//     security: [
//       {
//         BearerAuth: [],
//       },
//     ],
//   },

//   apis: ["./src/routes/*.ts"],
// };

// const specs = swaggerJsdoc(options);

// export const setupSwagger = (app: Express) => {
//   app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(specs)
//   );
// };
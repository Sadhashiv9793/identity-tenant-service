import { Router } from "express";

const healthRoutes = Router();

healthRoutes.get("/", (_req, res) => {
  return res.status(200).json({
    success: true,
    service: "Identity Service",
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

export default healthRoutes;
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// import { setupSwagger } from "./config/swagger";

// Routes
import healthRoutes from "./routes/health.routes";

const app: Application = express();

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * CORS
 */
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

/**
 * Parsers
 */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Compression
 */
app.use(compression());

/**
 * Logging
 */
app.use(morgan("dev"));

/**
 * Health Check
 */
app.use("/health", healthRoutes);

/**
 * API Routes
 */
app.use("/api/v1/auth", () => {});
app.use("/api/v1/users", () => {});
app.use("/api/v1/tenants", () => {});
app.use("/api/v1/roles", () => {});
app.use("/api/v1/permissions", () => {});

/**
 * Swagger
 */
// setupSwagger(app);S

/**
 * 404 Handler
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
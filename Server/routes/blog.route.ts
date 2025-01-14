import express, { Request, Response } from "express";
import BlogController from "../controllers/blog.controller";
import { Logger } from "../utils/logger";

const blogRouter = express.Router();

blogRouter.get("/", (req: Request, res: Response) => {
    BlogController.getAll(req, res);
    Logger.warn("Get all blog");
})

blogRouter.get("/:id", (req: Request, res: Response) => {
    BlogController.getById(req, res);
    Logger.warn(`Get blog with id: ${req.params.id}`);
})

blogRouter.post("/", (req: Request, res: Response) => {
    BlogController.create(req, res);
    Logger.warn("Create blog");
})

blogRouter.put("/:id", (req: Request, res: Response) => {
    BlogController.update(req, res);
    Logger.warn(`Update blog with id: ${req.params.id}`);
})

blogRouter.delete("/:id", (req: Request, res: Response) => {
    BlogController.delete(req, res);
    Logger.warn(`Delete blog with id: ${req.params.id}`);
})

export default blogRouter;
import { Request, Response } from "express";
import { Logger } from "../utils/logger";

class crudController {
    protected model;

    constructor(model: any) {
        this.model = model;
    }

    /**
     * Get All Items
     * @route {GET} /api/v1/{model}
     * @param req 
     * @param res 
     * @returns all items
     */
    getAll = async (req: Request, res: Response) => {
        try {
            const existedItem = await this.model.find();
            res.json(existedItem);
        } catch (error: any) {
            res.status(500).json({ error: error });
            Logger.error(`Error execute getAll with Request: {GET} ${req.url}`);
            Logger.error(error);
        }
    }

    /**
     * Get Item by ID
     * @route {GET} /api/v1/{model}/{id}
     * @param req 
     * @param res 
     * @returns item by id
     */
    getById = async (req: Request, res: Response) => {
        try {
            const existedItem = await this.model.findById(req.params.id);
            if (!existedItem) {
                res.status(404).json({ message: "Item not found" });
                return ;
            }
            res.json(existedItem);
        } catch (error: any) {
            res.status(500).json({ error: error });
            Logger.error(`Error execute getAll with Request: {GET} ${req.url}`);
            Logger.error(error);
        }
    }

    /**
     * Create new Item
     * @route {POST} /api/v1/{model}
     * @param req 
     * @param res 
     * @returns new item
     */
    create = async (req: Request, res: Response) => {
        try {
            const newItem = await this.model.create(req.body);
            res.status(201).json(newItem);
        } catch (error: any) {
            res.status(500).json({ error: error });
            Logger.error(`Error execute getAll with Request: {POST} ${req.url}`);
            Logger.error(`Error Request body: ${req.body}`);
            Logger.error(error);
        }
    }

    /**
     * Update existed Item
     * @route {PUT} /api/v1/{model}/{id}
     * @param req 
     * @param res 
     * @returns new item
     */
    update = async (req: Request, res: Response) => {
        try {
            const existedItem = await this.model.findById(req.params.id);
            if (!existedItem) {
                res.status(404).json({ message: "Item not found" });
                return ;
            }
            await existedItem.updateOne(req.body);
            res.json(existedItem);
        } catch (error: any) {
            res.status(500).json({ error: error });
            Logger.error(`Error execute getAll with Request: {PUT} ${req.url}`);
            Logger.error(`Error Request body: ${req.body}`);
            Logger.error(error);
        }
    }

    /**
     * Delete existed Item
     * @route {DELETE} /api/v1/{model}/{id}
     * @param req 
     * @param res 
     * @returns success message
     */
    delete = async (req: Request, res: Response) => {
        try {
            const existedItem = await this.model.findById(req.params.id);
            if (!existedItem) {
                res.status(404).json({ message: "Item not found" });
                return ;
            }
            await existedItem.deleteOne();
            res.json({ message: "Item deleted" });
        } catch (error: any) {
            res.status(500).json({ error: error });
            Logger.error(`Error execute getAll with Request: {DELETE} ${req.url}`);
            Logger.error(error);
        }
    }
}

export default crudController;
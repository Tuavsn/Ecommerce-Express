import Blog from "../models/blog.model";
import crudController from "./common.controller";

class BlogController extends crudController {
    constructor() {
        super(Blog);
    }
}

export default new BlogController();
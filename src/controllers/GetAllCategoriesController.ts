import { Request, Response } from "express";
import { GetAllCategoriesSerivce } from "../services/GetAllCategoriesService";


export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesSerivce();

        const categories = await service.execute();

        return response.json(categories);
    }
}
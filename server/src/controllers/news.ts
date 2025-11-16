import axios from "axios";
import type { Request, Response } from "express";
import {URLSearchParams } from "url";
import { allowedCategories, isValidCategory } from "../lib/validation.ts";

export async function getNews(req: Request, res: Response): Promise<Response>  {
    try {
        const category = (req.query.category as string) || "general";
        const search = (req.query.search as string) || undefined;
        const page = (req.query.page as string) || "1";

        //Category validation
        if (!isValidCategory(category)) {
            return res.status(400).json({
                error: true,
                message: `Invalid category. Provide one of the following: ${allowedCategories.join(", ")}`
            });
        }

        //Params
        const params = new URLSearchParams({
            language: "en",
            category,
            apiKey: process.env.API_KEY || "",
            page,
            pageSize: "16"
        });

        if(search){
            params.append("q", search)
        }

        //API call
        const {data} = await axios.get(`${process.env.API_BASE_URL}?${params}`)

        const articles = data?.articles;
       
        if (!articles || articles.length === 0) {
            return res.status(200).json([]);
        }

        return res.status(200).json(articles)
    } catch (err: any) {
        console.error(err);
        
        return res.status(500).json({
            error: true,
            message: err?.message || "Internal server error",
        });
    }
}

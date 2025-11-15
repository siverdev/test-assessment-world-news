import axios from "axios";
import type { Request, Response } from "express";
import {URLSearchParams } from "url";
import { allowedCategories, isValidCategory } from "../lib/validation.ts";

export async function getNews(req: Request, res: Response): Promise<Response>  {
    try {
        const category = (req.query.category as string) || "all";

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
            apiKey: process.env.API_KEY || "",
        });

        if (category && category !== "all") {
            params.append("category", category);
        }

        //API call
        const {data} = await axios.get(`${process.env.API_BASE_URL}?${params}`)

        const articles = data?.articles;
       
        if (!articles) {
            return res.status(404)
                .json({ error: false, message: "News not found" });
        }

        return res.status(200).json({"error": false, "message": "News successfully fetched", articlesCount: articles.length, articles})
    } catch (err: any) {
        console.error(err);
        
        return res.status(500).json({
            error: true,
            message: err?.message || "Internal server error",
        });
    }
}

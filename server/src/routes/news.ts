import { Router} from "express";
import { getNews } from "../controllers/news.ts";

const router = Router();

router.get("/", getNews);

export default router;
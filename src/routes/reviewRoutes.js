import express from "express";
import {
  getAllReviewsController,
  updateReviewStatusController,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getAllReviewsController);
router.patch("/:id", updateReviewStatusController);

export default router;

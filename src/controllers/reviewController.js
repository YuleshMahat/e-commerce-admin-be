import {
  getAllReviews,
  updateReviewStatus,
} from "../models/reviews/reviewModel.js";

export const getAllReviewsController = async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.json({ status: "success", data: reviews });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const updateReviewStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await updateReviewStatus(id, status);
    if (!updated) {
      return res
        .status(404)
        .json({ status: "error", message: "Review not found" });
    }

    res.json({ status: "success", data: updated });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

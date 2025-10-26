import Review from "./reviewSchema.js";

// ===== GET ALL REVIEWS =====
export const getAllReviews = async () => {
  try {
    const reviews = await Review.find()
      .populate("productId", "name images") // show only product name
      .populate("customerId", "name email") // show customer info
      .sort({ createdAt: -1 }); // latest first

    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ===== UPDATE REVIEW STATUS =====
export const updateReviewStatus = async (id, status) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { status },
      { new: true } // returns updated document
    );

    return updatedReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

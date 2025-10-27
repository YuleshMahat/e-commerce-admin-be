import Review from "./reviewSchema.js";

// ===== GET ALL REVIEWS =====
export const getAllReviews = async () => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // latest first

    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReviewsById = (id) => {
  return Review.findById(id);
};

export const getReviewsByFilter = (filter) => {
  return Review.find(filter);
};

// ===== UPDATE REVIEW STATUS =====
export const updateReviewStatus = async (id, filter) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      filter,
      { new: true } // returns updated document
    );

    return updatedReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

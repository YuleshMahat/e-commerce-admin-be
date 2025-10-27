import cloudinary from "../config/cloudinaryConfig.js";

export const uploadImages = async (files) => {
  try {
    const uploadPromises = files.map((file) => {
      return cloudinary.uploader.upload(file.path, {
        folder: "products",
        use_filename: true,
        unique_filename: true,
        overwrite: true,
      });
    });

    const results = await Promise.all(uploadPromises);

    return results;
  } catch (error) {
    console.log("Erroruploading images", error);
    throw error;
  }
};

export const singleUpload = async (file) => {
  try {
    const result = cloudinary.uploader.upload(file.path, {
      folder: "categories",
      use_filename: true,
      unique_filename: true,
      overwrite: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

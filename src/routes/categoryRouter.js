import express from "express";
import {
  createCategory,
  deleteCategory,
  fetchAllCategories,
  updateCategory,
} from "../controllers/categoryController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  createCategoryValidation,
  deleteCategoryValidation,
  updateCategoryValidation,
} from "../middleware/joiMiddleware.js";
import { upload } from "../middleware/multerconfig.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createCategoryValidation,
  authMiddleware,
  isAdmin,
  createCategory
);
router.get("/", authMiddleware, isAdmin, fetchAllCategories);
router.delete(
  "/",
  deleteCategoryValidation,
  authMiddleware,
  isAdmin,
  deleteCategory
);
router.patch(
  "/:id",
  updateCategoryValidation,
  authMiddleware,
  isAdmin,
  updateCategory
);
export default router;

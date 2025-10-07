import {
  findByFilter,
  getAllUsers,
  newAdmin,
  updateById,
} from "../models/users/userModel.js";
import { encodeFunction } from "../utils/encodeHelper.js";

export const getUserDetail = (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found"
      });
    }
    return res.json({
      status: "success",
      message: "User details retrieved successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Failed to retrieve user details.",
    });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      users,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Failed to retrieve users.",
    });
  }
};

export const updateUserDetail = async (req, res) => {
  try {
    const { username, phone, image } = req.body;
    const updateObj = { username, phone, image };

    const updatedUser = await updateById(req.user._id, updateObj);
    req.user = updatedUser;
    res.json({
      status: "success",
      message: "User details updated successfully.",
      user: req.user,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Failed to update user details.",
    });
  }
};

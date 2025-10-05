import { getAllUsers, updateById } from "../models/users/userModel.js";

export const getUserDetail = (req, res) => {
  res.send({
    status: "success",
    message: "User Details Found",
    user: req.user,
  });
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

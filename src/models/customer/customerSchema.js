// import { getDB, mongoConnect } from "../../config/mongoConfig.js";

// export const getAllCustomers = async () => {
//   await mongoConnect();
//   const db = getDB();

//   const customers = await db
//     .collection("customers")
//     .find()
//     .sort({ createdAt: -1 })
//     .toArray();

//   return customers;
// };

import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "customer" },
    phone: { type: String, required: true },
    image: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);

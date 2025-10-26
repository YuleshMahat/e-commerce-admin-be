import Customer from "./customerSchema.js";

// Get all customers
export const getAllCustomers = async () => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  return customers;
};

// Get single customer by ID
export const findCustomer = async (id) => {
  return await Customer.findById(id);
};

// Update customer by ID
export const updateCustomerById = async (id, updateObj) => {
  return await Customer.findByIdAndUpdate(id, updateObj, { new: true });
};

// Delete customer
export const deleteCustomerById = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

# E‑Commerce — Admin API (Node + Express + MongoDB)

Backend API for the admin CMS: product management, orders, customers, and review moderation.

## ✨ Features

- Admin auth & role checks
- Products CRUD
- Orders (list & status transitions)
- Review moderation
- CORS allow‑listing

## 🧱 Tech Stack

- **Node.js**, **Express**
- **MongoDB/Mongoose**
- **Packages used:** `bcryptjs`, `cloudinary`, `cors`, `dotenv`, `express`, `joi`, `jsonwebtoken`, `mongoose`, `multer`, `slugify`, `stripe`, `mongodb`

## 📂 Project Structure (typical)

```
src/
  config/
  controllers/
  middlewares/
  models/
  routes/
  utils/
  app.js / index.js
```

## ⚙️ Environment

**.env.example**

```
PORT=4000
MONGO_URI=mongodb+srv://...
JWT_ACCESS_SECRET=replace_me
JWT_REFRESH_SECRET=replace_me
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

## ▶️ Getting Started

```bash
yarn install
yarn dev     # nodemon
```

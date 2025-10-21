import dotenv from 'dotenv';

import app from "./src/api/app.js";
import connectDB from "./src/api/config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

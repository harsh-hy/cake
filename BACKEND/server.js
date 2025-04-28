import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

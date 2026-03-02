import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.post("/analyze", (req, res) => {
  const { symptoms } = req.body;

  // Fake AI logic
  let response = "General Physician";
  if (symptoms.toLowerCase().includes("skin")) response = "Dermatologist";
  if (symptoms.toLowerCase().includes("heart")) response = "Cardiologist";

  res.json({
    diagnosis: "Preliminary analysis complete.",
    specialist: response
  });
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);

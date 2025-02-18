import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import "dotenv/config";
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React build folder
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const connectionString = process.env.MONGO_URI;
const dbName = "orders";

app.use(express.json());

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/api/products", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const products = db.collection("orders");
    const data = await products.find({}).toArray();
    res.status(200).json(data);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});
app.post("/api/save", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const orders = db.collection("orders");
    const data = req.body;
    const result = await orders.insertOne({ data });
    if (result.acknowledged) {
      res.status(201).json({ message: "Order saved successfully" });
    } else {
      res.status(500).json({ message: "Could not save order" });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
});
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

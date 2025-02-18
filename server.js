import express from "express";
import { MongoClient } from "mongodb";
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const connectionString =
  "mongodb+srv://dhrubachakraborty2000:osyxe6lEsFzf3OCR@cluster0.rl3zq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    console.log(data);
    const result = await orders.insertMany(data);
    if (result.acknowledged) {
      res.status(201).json({ message: "Orders saved successfully" });
    } else {
      res.status(500).json({ message: "Could not save orders" });
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

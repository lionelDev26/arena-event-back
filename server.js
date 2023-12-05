const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const eventsRoutes = require("./routes/eventsRoutes");

const cors = require("cors");



app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: "Arena event backend." });
});

app.use('/api', userRoutes);
app.use('/api', eventsRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
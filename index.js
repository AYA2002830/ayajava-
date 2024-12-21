const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.get("/name", (req, res) => {
  res.send("Aya"); 
});

app.get('/', (req, res) => {
    res.send('Welcome to my application!');
}); 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
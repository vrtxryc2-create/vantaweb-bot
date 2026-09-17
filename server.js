const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("VantaWeb Messenger Bot is ONLINE!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`VantaWeb Bot running on port ${PORT}`);
});

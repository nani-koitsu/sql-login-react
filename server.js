const path = require("path");
const express = require("express");
const db = require("./utils/database");
// made a change to save
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

const usersRoute = require("./routes/users");
const adminsRoute = require("./routes/admin");

db.execute("SELECT * from Users");
app.use("/admin", adminsRoute);
app.use("/", usersRoute);

app.listen(PORT, () => console.log(`Server on ${PORT} `));

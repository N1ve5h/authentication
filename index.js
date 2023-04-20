const express = require("express");
const app = express();
const port = 3000;
const { join } = require("path");

app.use(express.static(join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", join(__dirname, "/views"));

const verifyPassword  = (req,res,next) => {
    const { password } = req.query;
    if (password === 'password') {
      return next();
    }
    res.send('WRONG PASSWORD TRY AGAIN');
}

app.get("/simple",verifyPassword, (req, res) => {
  res.render("home");
});

app.use((req,res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(port, () => {
  console.log(`Example authentication app listening on port ${port}`);
});

const dotEnv = require("dotenv");
dotEnv.config();

const app = require("./app");
const client = require("./db/config");

client
  .connect()
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server listening at PORT:${PORT}`);
});

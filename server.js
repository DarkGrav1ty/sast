const express = require("express");
const app = express();

// Serve everything inside the /public directory
app.use(express.static(__dirname + "/public"));

// Start the web server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Website running on port ${PORT}`);
});

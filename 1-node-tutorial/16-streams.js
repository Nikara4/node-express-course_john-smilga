const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt", {
  highWaterMark: 9000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", () => {
  console.log(error);
});

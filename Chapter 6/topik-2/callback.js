const fs = require("fs");

let textRead = "";

// Read the file 1.txt
fs.readFile("./files/1.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  textRead = data;

  // Read the file 2.txt
  fs.readFile("./files/2.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    textRead = textRead + "\n" + data;

    // Read the file 3.txt
    fs.readFile("./files/3.txt", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
      textRead = textRead + "\n" + data;
      fs.writeFile("./files/gabung.txt", textRead, (err) => {
        if (err) {
          throw err;
        }
        console.log("The file has been saved!");
      });
    });
  });
});

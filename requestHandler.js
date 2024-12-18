const fs = require("fs");
const requestHandler = (req, res) => {
    console.log(req.url);
    let fileName = "";
    switch (req.url) {
      case "/":
        fileName =  "home.html";
        break;
      case "/about":
        fileName =  "about.html";
        break;
      case "/contact":
        fileName =   "contact.html";
        break;
        case "/review":
          fileName =  "review.html";
          break;
      default:
    fileName = "error.html";
    }
  
  
    fs.readFile(fileName, (error, result) => {
      if (!error) {
        res.end(result);
      }     
      
    })
  }
  module.exports=requestHandler;
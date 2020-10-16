const express = require("express");
const app = express();


app.get("/", function(request, response){
    response.send(<h1>Students DB API</h1>);
})

app.listen(3000, function(){
    console.log("\tserver running at port 3000");
})
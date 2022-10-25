const express = require ("express")
const app = express ()

app.set ('views', __dirname + '/views');


app.get ('/pollo', (request, response) => {response.send("Superpollito")
response .render ('./views/index.html')

});





app.listen(3000,()=>{console.log("serverrunning")}

)
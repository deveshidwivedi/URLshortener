const express = require('express');
const path= require ('path');
const urlRoute = require('./routes/url');
const staticRoute=require('./routes/staticRouter');
const URL = require('./models/url');
const app = express();

const port = 8500;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views") );

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/test", async(req,res)=>{
 const allUrls= await URL.find({});
return res.render('home', {
  urls: allUrls,
});
});

app.use("/url", urlRoute);
app.use("/", staticRoute);

 
app.get('/shortened/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const newTimestamp = Date.now(); // Create a new timestamp for the visit
  
    try {
      const updatedURL = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: { timestamp: newTimestamp }
          }
        },
        { new: true }
      );
  
      if (!updatedURL) {
        return res.status(404).send('URL not found');
      }
      
      
      res.redirect(updatedURL.redirectUrl);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, () => {
    console.log(`The server has started on port ${port}!`);
  });

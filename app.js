require('dotenv').config();

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/books', async (req,res)=> {

  return res.json({
    message: 'Got it',
    data: [
      {
        title: "Sons Of Anarchy",
        body: "Body text goes here...",
      },
      {
        title: "Games of Thrones",
        body: "Body text goes here...",
      }
    ]
  })
});

app.listen(PORT, () => {
  console.log("listening for requests: " + PORT);
});

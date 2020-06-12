const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./client/dist'));
//should really use path.join to mitigate differences b/w mac and windows

// app.get('/', (req, res)=>{
//   res.status(200);
// })
app.listen(PORT, ()=>console.log('app is listening on port', PORT));


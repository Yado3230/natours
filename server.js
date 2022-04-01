const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(
    'mongodb+srv://yared:yared@cluster0.7yybr.mongodb.net/natours?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('[+] Succesfully connected to database.');
  })
  .catch((err) => {
    console.log('connection failed');
    console.log(err);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('App running on port ' + port);
});

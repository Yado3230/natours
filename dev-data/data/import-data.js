const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const Tour = require('./../../models/tourModel');

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

/////read json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//import data into db
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data succesfully loaded');
  } catch (err) {
    console.log(err);
  }
};
///delete all data from collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data succesfully loaded');
  } catch (err) {
    console.log(err);
  }
};

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// connect db
// mongoose.connect('mongodb://127.0.0.1:27017/gallery');

// create schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

// model
// const Photo = mongoose.model('Photo', PhotoSchema);

// create photo
// const photo = Photo.create({
//   title: 'Photo title 1',
//   description: 'Photo description 1',
// });

// read a photo
// Photo.find({}).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// });

// update photo

// const id = '64ea07af1616a3ab5f5c0b4a';

// Photo.findOneAndUpdate(
//   {
//     _id: id,
//   },
//   {
//     title: 'Photo title 111 updated',
//     description: 'Photo description 111 updated',
//   },
//   { new: true },                  // güncellenmiş veriyi konsolda geriye döndürür.
// )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// delete a photo

// const id = '64ea07af1616a3ab5f5c0b4a';
// Photo.findByIdAndDelete(id)
//   .then((data) => {
//     console.log('photo is removed');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

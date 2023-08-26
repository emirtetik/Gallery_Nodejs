const Photo = require('../models/Photo');
const fs = require('fs');
exports.getAllPhotos = async (req, res) => {
  const page = req.query.page || 1;                                   
  const photosPerPage = 2;                                          // bir sayfada kaç tane gösteriliceği
  const totalPhotos = await Photo.find().countDocuments();          // toplam databasedeki veri sayısı

  const photos = await Photo.find({})              //her sayfada göstermek istediğimiz fotograflar bilgisi
  .sort('-dateCreated')
  .skip((page - 1) * photosPerPage)   
  .limit(photosPerPage);                              

  res.render('index', {
    photos: photos,
    current: page,
    pages: Math.ceil(totalPhotos / photosPerPage)
  });
};


exports.getPhoto = async (req, res) => {
  // console.log(req.params.id);
  // res.render('about');
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
}


exports.createPhoto = async (req, res) => {
  // console.log(req.body);
  // console.log(req.files.image);

  // await Photo.create(req.body)
  // res.redirect('/')

  const uploadDir = 'public/uploads';
  // (if)  uploads var mı yok mu ?
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadImage.name;

  uploadImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadImage.name,
    });
    res.redirect('/');
  });
}

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
}


exports.deletePhoto =  async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
}

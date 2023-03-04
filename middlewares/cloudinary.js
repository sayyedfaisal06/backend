const cloudinary = require('cloudinary').v2;
const config = require('config');

// const cloud_name = config.get('faisal06');
// const api_key = config.get('393745394612392');
// const api_secret = config.get('vBbPOAJ7aZnN6POQ78jGZOYqWQo');

cloudinary.config({
  cloud_name: 'faisal06',
  api_key: '393745394612392',
  api_secret: 'vBbPOAJ7aZnN6POQ78jGZOYqWQo',
});

exports.cloudUpload = (file) => cloudinary.uploader.upload(file);

const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "unknwn"
  },
  jenre: {
    type: String,
    required: true,
    default: "unknwn"
  },
  description: {
    type: String,
    required: true,
    default: "unknwn"
  },
  price: {
    type: String,
    required: true,
    default: "unknwn"
  },
  discount:{
    type: String
  },
  year: {
    type: String,
    required: true,
    default: "unknwn"
  },
  company: {
    type: String,
    required: true,
    default: "unknwn"
  },
  language: {
    type: String,
    required: true,
    default: "unknwn"
  },
  min_os: {
    type: String,
    required: true,
    default: "unknwn"
  },
  min_processor:{
    type: String,
    required: true,
    default: "unknwn"
  },
  min_ram: {
    type: String,
    required: true,
    default: "unknwn"
  },
  min_videocard: {
    type: String,
    required: true,
    default: "unknwn"
  },
  os: {
    type: String,
    required: true,
    default: "unknwn"
  },
  processor:{
    type: String,
    required: true,
    default: "unknwn"
  },
  ram:{
    type: String,
    required: true,
    default: "unknwn"
  },
  videocard: {
    type: String,
    required: true,
    default: "unknwn"
  },
  drive: {
    type: String,
    required: true,
    default: "unknwn"
  },
  image: {
    type: String, 
    required: true,
    default: 'https://www.rastanley.com.au/img/products/NoImageLarge.png'
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  torrent: {
    type: String,
    default: "unknwn"
  }
});

module.exports = Games = mongoose.model('games', GamesSchema);
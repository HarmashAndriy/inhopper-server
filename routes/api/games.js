const express = require('express');
const router = express.Router();
const Book = require('../../models/Games');

router.get('/', (req, res) => {
  Book.find()
    .then(books =>{
      res.json(books)
    })
    .catch(err => {
      res.status(404).json({ nobooksfound: 'Игра не найдены' })});
});

router.get('/:id', (req, res) => {
  console.log("id: ", req.params.id)
  Book.findById(req.params.id)
    .then(book => {
      console.log("book:", book)
      res.json(book)
    })
    .catch(err => res.status(404).json({ nobookfound: 'Игра не найдена' }));
});

router.post('/', (req, res) => {
  const data = req.body
  const newGame = {
    name: data?.name ? data.name : 'unknwn',
    jenre: data?.jenre ? data.jenre : 'unknwn',
    description: data?.description ? data.description : 'unknwn',
    price: data?.price ? data.price : 'unknwn',
    discount: data?.discount ? data.discount : 'unknwn',
    image: data?.image ? data.image : 'https://www.rastanley.com.au/img/products/NoImageLarge.png',
    year: data?.year ? data.year : 'unknwn',
    company: data?.company ? data.company : 'unknwn',
    language: data?.language ? data.language : 'unknwn',
    min_os: data?.min_os ? data.min_os : 'unknwn',
    min_processor: data?.min_processor ? data.min_processor : 'unknwn',
    min_ram: data?.min_ram ? data.min_ram : 'unknwn',
    min_videocard: data?.min_videocard ? data.min_videocard : 'unknwn',
    os: data?.os ? data.os : 'unknwn',
    processor: data?.processor ? data.processor : 'unknwn',
    ram: data?.ram ? data.ram : 'unknwn',
    videocard: data?.videocard ? data.videocard : 'unknwn',
    drive: data?.drive ? data.drive : 'unknwn',
  }

  Book.create(newGame)
    .then(book => {
      res.json({ msg: 'Игра успешно добавлена' })
    })
    .catch(err => res.status(400).json({ error: 'Не удалось добавить игру' }));
});

router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Успешно Обновлено' }))
    .catch(err =>
      res.status(400).json({ error: 'Невозможно обновить базу данных' })
    );
});

router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Запись в игру успешно удалена' }))
    .catch(err => res.status(404).json({ error: 'Нет такой игры' }));
});

module.exports = router;
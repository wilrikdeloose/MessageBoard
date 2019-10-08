var faker = require('faker')

var appRouter = function (app) {

  var data = ([
    { id: 0, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/0/640/640' },
    { id: 1, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/1/640/640' },
    { id: 2, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/2/640/640' },
    { id: 3, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/3/640/640' },
    { id: 4, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/4/640/640' },
    { id: 5, title: faker.lorem.word(), content: faker.lorem.words(), imageUrl: 'https://picsum.photos/id/5/640/640' }
  ])

  app.get("/messages", function (req, res) {
    res.status(200).send(data)
  })

  app.get("/messages/:id", function (req, res) {
    const id = req.params.id

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        res.status(200).send(data[id])
        return
      }
    } 
    
    res.status(400).send({ message: 'Message with id ' + id + " not found!" })
  })

  app.post("/messages", function (req, res) {
    const message = {
      id: data.length,
      title: req.body.title,
      content: req.body.content,
      imageUrl: 'https://picsum.photos/id/' + data.length + '/640/640'
    }

    data.push(message)
    res.status(200).send(message)
  })
}

module.exports = appRouter
import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const { urlencoded, json } = bp

const db = {
  todos: [],
}

const app = express()

app.use(urlencoded({ extended: true }))
app.use(bp.json())
app.use(morgan('dev'))

app.get('/todos', (req, res) => {
  res.json({ data: db.todos })
})

app.get('/todos/:id', (req, res) => {
    const todo = db.todos.find(t => t.id == req.query.id)
    res.json(todo)
  })

app.post('/todos', (req, res) => {
    console.log(req.query.text)
  const newTodo = { complete: false, id: Date.now(), text: req.query.text }
  db.todos.push(newTodo)

  res.json({ data: newTodo })
})

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
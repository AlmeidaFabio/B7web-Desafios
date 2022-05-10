import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import path from 'path'
import mustache from 'mustache-express'
import { router } from './routes'

const app = express()

app.use(cors())
app.use(json())
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(router)

app.listen(process.env.PORT || 2222, () => {
    console.log(`Server is running in ${process.env.BASE_URL}:${process.env.PORT}`)
})

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import 'dotenv/config'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import fastifyStatic from '@fastify/static'
import { resolve } from 'path'
const app = fastify()
app.register(jwt, {
  secret: 'spacetime',
})
app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(multipart)
app.register(memoriesRoutes)
app.register(uploadRoutes)
app.register(authRoutes)
app.register(cors, {
  origin: true,
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })

  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })

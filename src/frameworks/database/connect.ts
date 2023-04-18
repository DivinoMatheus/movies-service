import mongoose from 'mongoose'


mongoose.Promise = global.Promise

export async function connect(){
  const url = 'mongodb://localhost:27018/movies'
  const options = { authSource: 'admin', user: 'root', pass: 'password' }

  console.info(`[database] trying to connect with database on ${url}`)
  await mongoose.connect(url, options).then(() => {
    console.info(`[database] successfully connected to database`)
  }).catch((err) => {
    console.error('[database] failed to connect to database', err)
  })
}
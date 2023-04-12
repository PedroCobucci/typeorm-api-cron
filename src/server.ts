import express from 'express'
import { MysqlDataSource } from './database/data-source'
import routes from './routes'
import './services/rotina'

MysqlDataSource.initialize().then(() => {
	const app = express()
	

	app.use(express.json())

	app.use(routes)

	return app.listen(3000)
})
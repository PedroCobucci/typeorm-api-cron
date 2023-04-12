import { Router } from 'express'
import { ClienteController } from './controllers/cliente.controller'
import { NotificacaoController } from './controllers/notificacao.controller'
import { WebHookController } from './controllers/webHook.controller'

const routes = Router()

routes.post('/cadastrarCliente', new ClienteController().cadastrar)

routes.post('/cadastrarNotificacao', new NotificacaoController().cadastrar)

routes.post('/webhook', new WebHookController().execute)

routes.get('/webhook', new WebHookController().execute2)

export default routes
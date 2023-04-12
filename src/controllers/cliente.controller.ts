import { Request, Response } from 'express'
import { Cliente } from '../entities/cliente'
import { ClienteRepository } from '../repositories/cliente.repository'

export class ClienteController{
    async cadastrar(req: Request, res: Response){

        try{

            const NovoCliente = new Cliente()
            Object.assign(NovoCliente, req.body)

            if( await ClienteRepository.findOneBy({telefone: NovoCliente.telefone}) ){
                return res.status(409).json({message: 'cliente com tal telefone já cadastrado'})
            }


            const cliente = ClienteRepository.create(NovoCliente)
    
            ClienteRepository.save(cliente)
    
            return res.status(200).json({message: `cadastrado novo cliente!`})

        }catch (error){
            return res.status(500).json({message: `internal server error`})
        }

        

    }
    async execute(req: Request, res: Response){
        return res.status(200).json({message: "oi"})
    }
}
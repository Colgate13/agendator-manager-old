import { Response, Request } from 'express';
import { CreateUser } from '../../../Services/CreateUser';

export class UserController {
    static async execute(
        request: Request,
        response: Response,
    ) {
        
        const { Name, Cpf_cnpj, Birthday,  Phone, Email, Password, idUserPermission } = request.body;
        
        const createUser = new CreateUser();

        const user = createUser.create({
            idUserPermission,
            Name,
            Cpf_cnpj,
            Birthday,
            Phone,
            Email,
            Password
        });

        return response.json({
            ...user
        })

    }
}
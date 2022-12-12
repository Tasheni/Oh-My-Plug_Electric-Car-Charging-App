import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './Users.service'

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}

    @Post('login')
    getById(@Body() body: any): any{
        console.log('hola');
        
        return this.usersService.getUserAccount(body)
    } 

    @Post('register')
    insert(@Body() body: any): any{
        return this.usersService.insertUser(body)
    }
}

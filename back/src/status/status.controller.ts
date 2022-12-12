import { Controller, Param, Post, Put } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
    constructor (
        private readonly statusService:StatusService
    ){}


    @Put(":id")
    changeStatus(@Param("id") id: number): any{
        
        return this.statusService.changeStatus(id)
    }

}

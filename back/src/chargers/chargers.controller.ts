import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ChargersService } from './chargers.service';


@Controller('chargers')
export class ChargersController {
    constructor( private readonly chargersService: ChargersService){
    }
    
    @Get()
    getAll(): any{
        return this.chargersService.getAll()
    }

    @Get(":id")
    getById(@Param("id") id: number): any{
        return this.chargersService.getById(id)
    }

    @Get("watts/:watts")
    getByWatts(@Param("watts") watts: string): any{
        console.log("Here")
        return this.chargersService.getByWatts(watts)
    }

    @Get("type/:type")
    getByChargeType(@Param("type") type: string): any{
        return this.chargersService.getByChargeType(type)
    }
    

    @Put(":id")
    changeStatus(@Param("id") id: number): any{
        return this.chargersService.changeStatus(id)
    }

    
}

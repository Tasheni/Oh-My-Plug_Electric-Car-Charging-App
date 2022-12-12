import { Injectable } from '@nestjs/common';
import { Charger, ChargerDocument } from './chargers.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { ChargersDto } from './dto/chargers.dto/chargers.dto';


@Injectable()
export class ChargersService {
    constructor(
        @InjectModel(Charger.name) private ChargerModel: Model<ChargerDocument>
    ) { }


    async getAll(): Promise<any> {
        return await this.ChargerModel.find();
    }

    async getById(id: number): Promise<any> {
        return await this.ChargerModel.findOne({id});
    }

    async getByWatts(watts: string): Promise<any> {
        return await this.ChargerModel.find({watts: watts});
    }

    async getByChargeType(type: string): Promise<any> {
        return await this.ChargerModel.find({chargerType: type});
    }

    async changeStatus(id: number): Promise<any> {
        let status: boolean = !((await this.getById(id)).status)
        console.log(status)
        console.log((await this.getById(id)).status)

        await this.ChargerModel.updateOne({id}, {$set: {status}});
        return {message: "updated"}
    }
}

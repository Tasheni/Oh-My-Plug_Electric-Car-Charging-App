import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Charger, ChargerDocument } from 'src/chargers/chargers.schema';
import { Status, StatusDocument } from './status.schema';

@Injectable()
export class StatusService {
    StatusModel: any;
    constructor(
        @InjectModel(Status.name) private statusModel: Model<StatusDocument>,
        @InjectModel(Charger.name) private chargersModel: Model<ChargerDocument>
    ){}

    async getById(id: number): Promise<any> {
        console.log(id);
        
        return await this.statusModel.findOne({chargerId: id});
    }

    async changeStatus(id: number): Promise<any> {
        // let status: boolean = !((await this.getById(id)).status)

        // let status = await this.getById(id)

        let firstAwait = await this.statusModel.collection.insertOne({chargerId: id, status: false});
        let secondAwait = await this.chargersModel.findByIdAndUpdate(id,{status: "booked", location: "Bilbao", watts: "456"})
        .setOptions({overwrite:true});
        return Promise.all([firstAwait,secondAwait])
        // return {message: "updated"}
    }
}

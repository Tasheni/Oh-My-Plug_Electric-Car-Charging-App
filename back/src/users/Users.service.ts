import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersDto } from './dto/users.dto/users.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }
    
    async getUsers(): Promise<any> {
        return await this.userModel.find();
    }
    async getUserAccount(body: any): Promise<any> {
        console.log(body);
        let { email, password } = body;
        console.log(await this.userModel.find({ email, password }));
        return await this.userModel.find({ email, password });
    }

    async insertUser(body: any): Promise<any> {
        let users: any = (await this.getUsers());
        // let userId: number = users.length > 0 ? (users.length + 1) : 1;
        // let newBody = { userId, ...body };
        await this.userModel.collection.insertOne(body);
        return {message: 'Ok'}
    }
}

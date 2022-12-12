import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose"

export type StatusDocument = Status & Document;

@Schema()
export class Status{

    @Prop({required: true})
    chargerId: number

    @Prop()
    status: boolean
}

export const StatusSchema = SchemaFactory.createForClass(Status)
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"

export type ChargerDocument = Charger & Document;

@Schema()
export class Charger{

    @Prop({unique: true, required: true})
    id: number

    @Prop()
    location: string

    @Prop()
    chargerType: string

    @Prop()
    watts: string 

    @Prop()
    status: string
}

export const ChargerSchema = SchemaFactory.createForClass(Charger)
import { IsBoolean, IsInt, IsString } from "class-validator";

export class ChargersDto {
   @IsInt()
   id: number
   
   @IsString()
   location: string

   @IsString()
   chargerType: string

   @IsString()
   watts: string

   @IsBoolean()
   status: string
}

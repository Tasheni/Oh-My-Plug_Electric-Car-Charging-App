import { IsBoolean, IsInt } from "class-validator";

export class StatusDto {
   @IsInt()
   chargerId: number
   
   @IsBoolean()
   status: boolean
}

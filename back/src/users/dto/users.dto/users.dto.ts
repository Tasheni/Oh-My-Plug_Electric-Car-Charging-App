import { IsInt, IsString } from "class-validator"

export class UsersDto {

    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    password: string

}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class LoginDto {
    @ApiProperty()
    @IsEmail()
    email: string ;
    
    
    @ApiProperty()
    @IsString()
    @IsStrongPassword()
    password: string ;
}
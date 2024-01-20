import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class SignUpDto {
    
    @ApiProperty()
    @IsEmail()
    email: string ;
    
    @ApiProperty()
    @IsString()
    @IsStrongPassword()
    password: string ;
    
    @ApiProperty()
    @IsString()
    name: string;
}
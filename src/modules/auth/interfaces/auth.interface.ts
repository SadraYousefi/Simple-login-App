import { CustomResponseType } from "src/core/types/response.types"
import { LoginDto } from "../dto/login.dto"
import { SignUpDto } from "../dto/signup.dto"

export interface IAuth {

    signUp(signupDto : SignUpDto): Promise<CustomResponseType>

    login(loginDto: LoginDto): Promise<CustomResponseType>

}
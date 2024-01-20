import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _authService: AuthService ,
    ) {}

    @Post("login")
    async login(@Body() loginDto: LoginDto) {
      return this._authService.login(loginDto) ;
    }

    @Post('/signup')
    async signUp(@Body() signUpDto: SignUpDto) {
      return this._authService.signUp(signUpDto) ;
    }
  
}

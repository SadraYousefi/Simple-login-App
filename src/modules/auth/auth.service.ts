import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IAuth } from './interfaces/auth.interface';
import { CustomResponseType } from 'src/core/types/response.types';
import { SignUpDto } from './dto/signup.dto';
import { User } from '@prisma/client';
import { AuthResponses } from './constants/responses.enum';
import { LoginDto } from './dto/login.dto';
import { compareHash, hash } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuth {
  constructor(
    private readonly _userService: UserService ,
    private readonly _jwtService: JwtService,
    ){}

  async signUp(signupDto: SignUpDto): Promise<CustomResponseType> {

    /* ba tavajoh be in ke field email dar database unique hast 
    lazem nist email user ro check konim ba yek global exception handler
    mishe in error ro modiriat kard
    */
   console.log(`Hashing user password: ${signupDto.password}`);
   const hashedPassword = await hash(signupDto.password) ;

   console.log(`AuthModule: Registering user with : ${signupDto}`)
    const user: User = await this._userService.create({
      email: signupDto.email , 
      password: hashedPassword ,
      name: signupDto.name ,
    }) ;

    if(!user) 
      throw new HttpException(AuthResponses.ERROR , HttpStatus.INTERNAL_SERVER_ERROR )
    console.log(`AuthModule: user registered: ${user}`);
      return {
        success: true , 
        message: AuthResponses.SUCCESS
      }
  }

  async login(loginDto: LoginDto): Promise<CustomResponseType> {

    console.log(`user signing with : ${loginDto}`)
    const user = await this._userService.findOne({email: loginDto.email}) ;
    if(!user)
      throw new HttpException(AuthResponses.BADCREDENTIAL , HttpStatus.BAD_REQUEST )
    
    console.log(`comparing user pass with hashed in database`);
    const comparePass = await compareHash(loginDto.password , user.password) ;
    if(!comparePass)
      throw new HttpException(AuthResponses.BADCREDENTIAL , HttpStatus.BAD_REQUEST )

    const payload = {id: user.id};
    console.log(`generating token for user: ${user.id}`);
      return {
        success: true ,
        message: await this._jwtService.signAsync(payload)
      }
  }


}

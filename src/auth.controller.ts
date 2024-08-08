import { Body, Controller, Post,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request  } from 'express';
import { log } from 'console';
import { AuthDto } from './dto';

@Controller('auth') // Ensure 'auth' is correctly prefixed
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto:AuthDto){
    console.log(dto,);
    
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

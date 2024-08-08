import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'

@Injectable()

export class AuthService{
    constructor(private prisma: PrismaService){}
    signin(){return {"msg":'I am signed in'}};
    async signup(dto:AuthDto) {
        const hash =await argon.hash(dto.password as string);
        const user=await this.prisma.user.create({
            data: {
                email: dto.email as string,
                hash,
            }
        })
        
        return {"msg":'I am signed up'}};

}

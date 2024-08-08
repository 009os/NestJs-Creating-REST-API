import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(): {
        msg: string;
    };
    signup(dto: AuthDto): Promise<{
        msg: string;
    }>;
}

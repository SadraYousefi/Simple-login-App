import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/core/db/prisma.service';

@Module({
  providers: [UserService , PrismaService],
  exports: [UserService , PrismaService] ,
})
export class UserModule {}

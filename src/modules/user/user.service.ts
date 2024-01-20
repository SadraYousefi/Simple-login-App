import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/core/db/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly _prisma : PrismaService) {}

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this._prisma.user.create({data}) ;
    }

    async findOne(uniqueField: Prisma.UserWhereUniqueInput):Promise<User | null> {

        return this._prisma.user.findUnique({
            where: uniqueField
        })

    }

}

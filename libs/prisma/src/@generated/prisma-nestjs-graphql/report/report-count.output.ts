import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportCount {

    @Field(() => Int, {nullable:false})
    tags!: number;

    @Field(() => Int, {nullable:false})
    media!: number;
}
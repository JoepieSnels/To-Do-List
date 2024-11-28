import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// import { v4 as uuid } from 'uuid';
import isEmail from 'validator/lib/isEmail';
import { IPet } from '@avans-nx-workshop/shared/api';
import { IsMongoId } from 'class-validator';

export type PetDocument = Pet & Document;

@Schema()
export class Pet implements IPet {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String
    })
    name!: string;

    @Prop({
        required: true,
        type: String
    })
    breed!: string;

    @Prop({
        required: true,
        type: Date
    })
    lastFed!: Date;

    @Prop({
        required: true,
        type: Boolean
    })
    energetic!: boolean;

    @Prop({
        required: true,
        type: Boolean
    })
    sick!: boolean;

    @Prop({
        required: true,
        type: String
    })
    imageUrl!: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);

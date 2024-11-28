import { HttpException, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pet as PetModel, PetDocument } from './pet.schema';
import { IPet } from '@avans-nx-workshop/shared/api';
// import { Meal, MealDocument } from '@avans-nx-workshop/backend/features';
import {
    PetCreateDto,
    PetInfoDto,
    PetUpdateDto
} from '@avans-nx-workshop/backend/dto';

@Injectable()
export class PetService {
    private readonly logger: Logger = new Logger(PetService.name);
    constructor(
        @InjectModel(PetModel.name) private petModel: Model<PetDocument>
    ) {}

    async findAll(): Promise<PetInfoDto[]> {
        this.logger.log(`Finding all items`);
        const items = await this.petModel.find();
        return items;
    }

    async findOne(_id: string): Promise<IPet | null> {
        this.logger.log(`finding pet with id ${_id}`);
        const item = await this.petModel.findOne({ _id }).exec();
        if (!item) {
            this.logger.debug('Item not found');
        }
        return item;
    }

    async create(pet: PetCreateDto): Promise<IPet | null> {
        this.logger.log(`Ontvangen payload: ${JSON.stringify(pet)}`);
        try {
            const createdItem = await this.petModel.create(pet);
            this.logger.log(`Pet aangemaakt: ${JSON.stringify(createdItem)}`);
            return createdItem;
        } catch (error) {
            this.logger.error(
                `Fout bij aanmaken pet: ${(error as Error).message}`
            );
            throw new HttpException((error as Error).message, 400);
        }
    }

    async update(_id: string, pet: PetUpdateDto): Promise<IPet | null> {
        this.logger.log(`Update pet ${pet.name}`);
        return this.petModel.findByIdAndUpdate({ _id }, pet);
    }

    async delete(_id: string): Promise<IPet | null> {
        this.logger.log(`Delete pet ${_id}`);
        return this.petModel.findByIdAndDelete({ _id });
    }
}

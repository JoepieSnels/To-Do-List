import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PetService } from './pet.service';
import { IPet } from '@avans-nx-workshop/shared/api';
import { PetCreateDto, PetUpdateDto } from '@avans-nx-workshop/backend/dto';
@Controller('pet')
export class PetController {
    constructor(private readonly petService: PetService) {}

    @Get()
    async findAll(): Promise<IPet[]> {
        return this.petService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<IPet | null> {
        return this.petService.findOne(id);
    }

    @Post()
    async create(@Body() pet: PetCreateDto): Promise<IPet | null> {
        return this.petService.create(pet);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() pet: PetUpdateDto) {
        return this.petService.update(id, pet);
    }
}

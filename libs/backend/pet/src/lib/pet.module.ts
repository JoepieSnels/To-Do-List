import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetController } from './pet/pet.controller';
import { PetService } from './pet/pet.service';
import { Pet, petSchema } from './pet/pet.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Pet.name, schema: petSchema }])
    ],
    controllers: [PetController],
    providers: [PetService],
    exports: [PetService] // Export if used in other modules
})
export class PetModule {}

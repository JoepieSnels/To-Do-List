import { petSchema } from './pet.schema';

describe('petSchema', () => {
    it('should work', () => {
        expect(petSchema()).toEqual('pet.schema');
    });
});

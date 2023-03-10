describe('jumpSearch', () => {
    const testList = [1,2,3,4,5,6,7,8,9];

    it('should return 0', () => {
        const expected = 0;
        const result = jumpSearch(testList, 1);

        expect(result).toEqual(expected);
    });

    it('should return 3', () => {
        const expected = 3;
        const result = jumpSearch(testList, 4);

        expect(result).toEqual(expected);
    });

    it('should return 8', () => {
        const expected = 8;
        const result = jumpSearch(testList, 9);

        expect(result).toEqual(expected);
    });

    it('should return -1', () => {
        const expected = -1;
        const result = jumpSearch(testList, 0);

        expect(result).toEqual(expected);
    });
    
});
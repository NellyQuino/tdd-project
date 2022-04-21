describe("Unit Test for Spiderman class", () => {
    test('1) Create an Spiderman object', () => {

        const andrewGarfiel = new Spidermna("Spiderman Sony", 31, "Andrew Garfiel", 2, "Sony")
        expect(resultOfSomething).toBe(18);

        //Validamos que este codigo funciones de forma esperada 
        expect(andrewGarfiel.name).toBe("Spiderman Sony")
        expect(andrewGarfiel.age).toBe(31)
        expect(andrewGarfiel.actor).toBe("Andrew Garfiel")
        expect(andrewGarfiel.movies).toBe(31)
        expect(andrewGarfiel.studio).toBe("Sony")
    });
})
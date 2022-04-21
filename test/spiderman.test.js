const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
    test('1) Create an Spiderman object', () => {

        const andrewGarfiel = new Spiderman("Spiderman Sony", 31, "Andrew Garfiel", 2, "Sony")

        //Validamos que este codigo funciones de forma esperada 
        expect(andrewGarfiel.name).toBe("Spiderman Sony")
        expect(andrewGarfiel.age).toBe(31)
        expect(andrewGarfiel.actor).toBe("Andrew Garfiel")
        expect(andrewGarfiel.movies).toBe(2)
        expect(andrewGarfiel.studio).toBe("Sony")
    });
})
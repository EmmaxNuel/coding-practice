const startCar = require("./startCar");

test('startCar returns true when there is enough fuel', () => {
    const fuelLevel = 10; // sufficient fuel
    const result = startCar(fuelLevel); 
    expect(result).toBe(true);
});

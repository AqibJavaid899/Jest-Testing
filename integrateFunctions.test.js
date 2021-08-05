const areaOfCylinder = require('./integrateFunctions')

// Defining a integration test for calculatiing the Area of Cylinder
test("Testing the area of the Cylinder", () => {
    const values = {r: 4, h: 5}
    expect(areaOfCylinder(values)).toBe(226.19)
})
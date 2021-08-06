// Defining a function which will use a utility function to calculate the area of Regular Cylinder
// Area of Cylinder : A = 2πrh + 2πr^2

const areaOfCylinder = (values) => {
    const valueOne = firstTerm(values.r,values.h)
    const valueTwo = secondTerm(values.r)
    return parseFloat((valueOne + valueTwo).toFixed(2))
}

const firstTerm = (r, h) => {
    return (2 * Math.PI * r * h)
}
const secondTerm = (r) => {
    return (2 * Math.PI * Math.pow(r,2))
}

module.exports = areaOfCylinder
// * 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars // calls the second car through the comma: ,
//Predict the output
console.log(randomCar) // Will output the first car in the dictonary: Tesla
console.log(otherRandomCar) // Will output the second car in the dictionary: Mercedes

// * 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // Throws an error on name because it is not defined call this by employee rather than name
console.log(otherName);

// // * 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //Output: 12345
console.log(hashedPassword); //Output: undefined because person is a dictionary and the password is not inside the dictionary

// * 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //Output: False 2 = 5
console.log(first == third); //Output: True 2 = 2

// * 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //Output: Value
console.log(secondKey); //Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //Output: 1
console.log(willThisWork); //Output: 5
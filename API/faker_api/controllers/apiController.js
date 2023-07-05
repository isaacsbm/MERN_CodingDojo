
const {faker} = require('@faker-js/faker');
const Company = () => {
    const fakeCompany = {
        id: faker.number.int(100),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            Country: faker.location.country()
        }
    };
    return fakeCompany;
};

const User = () => {
    const fakeUser = {
        id: faker.number.int(100),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNum: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return fakeUser;
}

const newCompany = Company();
const newUser = User();
const companyUsers ={
    user: newUser,
    company: newCompany
}

module.exports = {
    company: (req, res) => {
        res.json(newCompany)
    },
    user: (req, res) => {
        res.json(newUser);
    },
    companyUser: (req, res) => {
        res.json(companyUsers);
    }
}
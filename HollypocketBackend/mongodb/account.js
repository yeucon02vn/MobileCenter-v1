db.createCollection("Accounts");

db.Accounts.insertMany([
  {
    Email: "admin@gmail.com",
    Addresses: [
      {
        Name: "dinh mai",
        Value: "123231",
        PhoneNumber: "212",
      },
    ],
    PhoneNumber: "0987654742",
    Name: "Admin",
    Gender: "male",
    Password: "password",
    Token: null,
    AccountType: 0,
    IsDeleted: false,
  },
  {
    Email: "user@gmail.com",
    Addresses: [
      {
        Name: "dinh mai",
        Value: "123231",
        PhoneNumber: "212",
      },
    ],
    PhoneNumber: "0987654742",
    Name: "user",
    Gender: "male",
    Password: "password",
    Token: null,
    AccountType: 1,
    IsDeleted: false,
  },
  {
    Email: "employ@gmail.com",
    Addresses: [
      {
        Name: "dinh mai",
        Value: "123231",
        PhoneNumber: "212",
      },
    ],
    PhoneNumber: "0987654742",
    Name: "employee",
    Gender: "male",
    Password: "password",
    Token: null,
    AccountType: 2,
    IsDeleted: false,
  },
]);

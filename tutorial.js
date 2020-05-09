const sum = (num1, num2) => num1 + num2;
// console.log(sum(2,3));
const PI = 3.147;

class Users {
    constructor() {
        console.log("Akara");
    }
}

// a = new Users();
// console.log(a);

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.Users = Users;

//Exporting modules in one go.
module.exports = {sum:sum,PI:PI,Users:Users};
//  Ternaries
//  Logical operators

// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return
// “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression
 

// 1)
 const password_validation = (password) => {
    if (password.length > 7) {
        console.log("Strong");
    }else {
        console.log("Weak");
    }
}
password_validation("586")

// 2)
 const password_validation2 = (password) => {
    (password.length > 7) ? console.log("Strong"):console.log("Weak");
}
password_validation2("jlj5646546l")

// 3)
const password_validation3 = (password) => {
    console.log(
    (password.length > 7) && "Strong" || (password.length < 7) && "Weak");
}

password_validation3("585554546")

// 4)
const password_validation4 = (password) => {
    (password.length > 7) && /[A-Z]/.test(password)
    ?console.log("Very Strong")
    :(password.length === 7)
    ?console.log("Strong")
    :(password.length < 7)
    ?console.log("Weak")
    :console.log("not good")
};


password_validation4("55A95")
password_validation4("5555A95")
password_validation4("55A65595")
password_validation4("55a65595")
const accountId = 144553
let accountEmail = "aryan@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2

// accountEmail="hc@hc.com"
// accountPassword="21212121"
// accountCity="BEngaluru"

console.log(accountId);

/*
Prefer not to use var beacause of
issue in block scope and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
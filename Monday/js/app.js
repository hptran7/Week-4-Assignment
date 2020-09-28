//Palindrom app//

let wordPand = 'channahc';
function panlindromCheck (word){
    let reverseWord = word.split("").reverse().join('')
    if (word === reverseWord){
        return "The string is Panlindrom"
    } else{
        return "The string is not Panlindrom"
    }
}

console.log(panlindromCheck(wordPand))

//Remove duplicate//

let duplicateString = ["John","Mary", "Alex", "Steve", "Mary", "John"];
function removeDuplicate(string){
    let newList = [];
    for (let name of string){
        if (newList.indexOf(name) === -1){
            newList.push(name);
        } 
    }
    return newList
    }
console.log(removeDuplicate(duplicateString));

//Find the largest number and smallerst in the Array//

 let numberArray = [2,3,4,7,6,8,1,9];
 function lartgestNum(num){
     let largestNumber = Math.max(...num)
     return largestNumber
 }

 console.log(lartgestNum(numberArray));

 function smallestNum(num){
     let smallestNumber = Math.min(...num);
     return smallestNumber
 }
 console.log(smallestNum(numberArray))

 //Create FizzBuzz app//
 let checkNumber = 15
 function fizzBuzz (num){
     if (num % 3 ==0 && num %5 == 0){
         console.log("Fizzbuzz");
     } else if( num%3 == 0){
         console.log("Fizz");
     } else if (num % 5 == 0){
         console.log("Buzz")
     } else{
         console.log("Not a Fizzbuzz")
     }
 }
 fizzBuzz(checkNumber)

 //Even or odd Number//
function evenOdd (num){
    if (num % 2 == 0){
        console.log(`${num} is an even number`)
    }else{
        console.log(`${num} is an odd number`)
    }
}
evenOdd(5)

//Sort array in ascending and descending//

let sortArray = [3,4,56,7,8,1];

function ascenOrder (array){
    let result = array.sort((a,b) => a-b);
    return result
}
console.log(ascenOrder(sortArray))

function descenOrder (array){
    let result = array.sort((a,b)=> b-a);
    return result
}
console.log(descenOrder(sortArray))

// Class assignment//
class bankAccount{
    constructor(firstName,lastName,middleName,accountType,balance,status){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.accountType = accountType;
        this.balance = balance;
        this.status = status;
        this.fees = 0
    }
    deposit (amount){
        this.balance += amount;
        console.log(`Account of ${this.firstName} has new balance of ${this.balance}`)
    }
    withdraw (amount){
        this.balance -= amount;
        console.log(`Account of ${this.firstName} has new balance of ${this.balance}`)
        this.chargeFee()
    }
    transfer(amount,toAccount){
      toAccount.deposit(amount);
      this.withdraw(amount);  
    }
    chargeFee(){
        if (this.balance <0){
            this.fees = "$-35"
            console.log(`A free of $35 has been charged to this account of ${this.firstName}`)
        }
    }
}
let newAccount = new bankAccount('John','Doe','','checking',50,'Opened')
let secondAccount = new bankAccount('Marry','Doe','T','Checking',200,'Openned')
console.log(newAccount)
console.log(secondAccount)
newAccount.transfer(70,secondAccount)
// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketSale) {
  if (ticketSale >= 0) {
    const ticketPrice = 120;
    const earnByTicket = ticketPrice * ticketSale;
    const guardCost = 500;
    const stuffCost = 50 * 8;
    const totalCost = guardCost + stuffCost;
    const remainingMoney = earnByTicket - totalCost;
    return remainingMoney;
  } else {
    return "Invalid Number";
  }
}
const remainingMoney = calculateMoney(105);
console.log(remainingMoney);

// Problem-02: Good Name , Bad Name
function checkName(name) {
  if (typeof name === "string") {
    const modifiedName = name.split(" ").join("");
    const lastCharacter = modifiedName[modifiedName.length - 1];

    if (
      lastCharacter == "a" ||
      lastCharacter == "A" ||
      lastCharacter == "e" ||
      lastCharacter == "E" ||
      lastCharacter == "y" ||
      lastCharacter == "Y" ||
      lastCharacter == "i" ||
      lastCharacter == "I" ||
      lastCharacter == "w" ||
      lastCharacter == "W" ||
      lastCharacter == "u" ||
      lastCharacter == "U" ||
      lastCharacter == "o" ||
      lastCharacter == "O"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "invalid";
  }
}
const takenName = checkName("    HASU ");
console.log(takenName);

// Problem 03 : Virus in my Array
function deleteInvalids(array) {
  if (Array.isArray(array) == true) {
    let modifiedArray = [];
    for (let number of array) {
      if (typeof number == "number" && Number.isNaN(number) == false) {
        modifiedArray.push(number);
      } else {
        continue;
      }
    }
    return modifiedArray;
  } else {
    return "Invalid Array";
  }
}
const purifiedArray = deleteInvalids([55, NaN, "hasan", 100, 23, false, 2]);
console.log(purifiedArray);

// Problem 04 : Make A Great Password
function password(obj) {
  let objLength = Object.keys(obj).length;
  let yearLength = obj.birthYear.toString().length;
  if (objLength == 3 && yearLength == 4) {
    const firstCharacter = obj.siteName[0].toUpperCase();
    const remainingCharacters = obj.siteName.slice(1);
    const site = firstCharacter + remainingCharacters;
    const year = obj.birthYear;
    const name = obj.name;
    const readyPassword = site + "#" + name + "@" + year;
    return readyPassword;
  } else {
    return "invalid";
  }
}
const myObject = {
  name: "robiul",
  birthYear: 1911,
  siteName: "facebook",
};
const readyPassword = password(myObject);
console.log(readyPassword);


//Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr)) {
    let sumOfEarn = 0;
    for (num of arr) {
      if (num >= 3000) {
        num = num - (num * 20) / 100;
        sumOfEarn = sumOfEarn + num;
      } else {
        sumOfEarn = sumOfEarn + num;
      }
    }
    if (sumOfEarn > 0) {
      const totalSaving = sumOfEarn - livingCost;
      return totalSaving;
    } else {
      return "earn more";
    }
  } else {
    return "invalid input";
  }
}
const allPayment = [3000, 4100, 100];
const livingCost = 5000;
const totalSaving = monthlySavings(allPayment, livingCost);
console.log(totalSaving);

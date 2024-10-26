//Luhn checker

import { prepFunc, sumNumArray, inputX2 } from "./func";
import * as promptSync from "prompt-sync";

// const testInput: string = "D4532 Q8765 1234 5678";

const prompt = promptSync();
const testInput: string = prompt("Enter number to check: ");

//0. rm all spaces + non-numbers
const testStr: string = prepFunc(testInput)
console.log(testStr);

//1. reverse int (unnecessary step)
const testRev: number = parseInt(
    testStr.split("").reverse().join("")
);
console.log(testRev);

//2. double every other digit (exclude last digit)
//3. sum digits of single_res if single_res > 10

const testResArr: number[] = inputX2(testStr);
console.log(testResArr);

//4. sum all digits (Σ)
const singleSum: number = sumNumArray(testResArr);
console.log(singleSum)

//5. res % 10 == 0
const remainder: number = singleSum % 10;
if (remainder === 0) {
    console.log("PASS");
} else {
    console.log("FAIL");
}
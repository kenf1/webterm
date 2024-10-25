//Luhn algorithm
import { prepFunc, sumNumArray, inputX2 } from "./func";

const testInput: string = "D4532 Q8765 1234 5678";

//0. rm all spaces + non-numbers
const testStr: string = prepFunc(testInput)
console.log(testStr);

//1. reverse int (unnec step)
const testRev: number = parseInt(
    testStr.split('').reverse().join('')
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
console.log(singleSum % 10);
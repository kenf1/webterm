//for debugging purposes, prints input var + type
export function printRes(input: string | number) {
    console.log(
        input,
        typeof input
    )
}

//divide & conquer approach to rm all spaces + non-numbers
export function prepFunc(input: string): string {
    //rm spaces + A-z w/ regex
    let str_res: string = input
        .split(" ")
        .map(
            (substr) => parseInt(
                substr.replace(/[A-Za-z\\s]/g, ""),
                10
            )
        )
        .join("");

    return str_res;
}

//extract all digits from string (everything else ignored)
export function intRegex(input: string): string {
    let digits = input.match(/\d/g) || [];
    return digits ? digits.join("") : "";
}

/*
    sum digits of numbers >= 10
    run at most once -> will account for all use cases (highest 2x value will be 9 * 2 = 18)
    1 + 8 = 9, 9 < 10
*/
function sumGT10(input: number): number {
    if (input >= 10) {
        let indivDigits: number[] = input.toString().split("").map(Number);
        let digitsSum: number = indivDigits.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
        );
        return digitsSum;
    } else {
        return input;
    }
}

//sum all digits inside int array
export function sumNumArray(input: number[]): number {
    let res: number = input.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );

    return res;
}

//2x every other digit + sum digits if result >= 10
export function inputX2(input: string): number[] {
    //empty array to store values
    let actualList: number[] = []

    //convert string -> int
    let intArray: number[] = input.split("").map(Number);

    //push check number (1st digit in orig input, last in rev input)
    actualList.push(intArray[0]);

    //all other digits in 
    for (let i: number = 1; i < intArray.length; i++) {
        if (i % 2 == 1) { //items to double
            let tempInt: number = intArray[i] * 2;

            if (tempInt >= 10) { //items to sum digits
                actualList.push(sumGT10(tempInt));
            } else { //everything else
                actualList.push(tempInt);
            }
        } else if (i % 2 == 0) { //items to stay as is
            actualList.push(intArray[i]);
        } else { //catch any exceptions
            console.log("Unable to classify " + intArray[i] + " at index " + i);
        }
    }

    return actualList;
}

//create A-z ascii ref
function azRef(): string {
    let tempArr: string[] = [];

    //capital
    for (let i = 65; i <= 90; i++) {
        tempArr.push(String.fromCharCode(i));
    }
    let azCap: string = tempArr.join("");

    //lower
    let azLower: string = azCap.toLowerCase();

    return azCap + azLower;
}

//ROT13 logic (encode + decode)
export function rot13(ver: string, inputStr: string): string {
    const refStr: string = azRef();
    let storage: string[] = [];

    for (let i = 0; i < inputStr.length; i++) {
        //non-accepted input
        if (!refStr.includes(inputStr[i])) {
            console.log("inputStr contains non-accepted input chars");
            return "";
        }

        //get orig index
        let currentIndex: number = refStr.indexOf(inputStr[i]);

        //create new index -> get new char
        switch (ver) {
            case "encode":
                let encodeIndex: number = (currentIndex + 13) % refStr.length;
                storage.push(refStr[encodeIndex]);
                break;
            case "decode":
                let decodeIndex: number = (currentIndex - 13) % refStr.length;
                storage.push(refStr[decodeIndex]);
                break;
            default:
                console.log("Accepted options are: `encode` or `decode`");
                return "";
        }
    }

    return storage.join("");
}
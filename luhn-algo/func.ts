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
    const str_res: string = input
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

/*
    sum digits of numbers >= 10
    run at most once -> will account for all use cases (highest 2x value will be 9 * 2 = 18)
    1 + 8 = 9, 9 < 10
*/
function sumGT10(input: number): number {
    if (input >= 10) {
        let indivDigits: number[] = input.toString().split('').map(Number);
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
    const actualList: number[] = []

    //convert string -> int
    const intArray: number[] = input.split('').map(Number);

    //push check number (1st digit in orig input, last in rev input)
    actualList.push(intArray[0]);

    //all other digits in 
    for (let i: number = 1; i < intArray.length; i++) {
        if (i % 2 == 1) { //items to double
            const tempInt: number = intArray[i] * 2;

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
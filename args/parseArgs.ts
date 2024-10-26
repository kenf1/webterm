//test param
const exInput: string = "cd args && tsc main.ts";

//single command only
let acceptedArgs: string[] = ["help", "cd", "tsc", "luhn-check", "github"];

function argMatch(input: string, refArray: string[]) {
    let inputArr: string[] = input.split(" ");

    if (inputArr.length > 0) {
        if (refArray.includes(inputArr[0])) {
            console.log("SUCCESS");
        } else {
            console.log(inputArr[0] + " is not an accepted argument");
        }
    } else {
        console.log("No argument provided");
    }
}

argMatch(exInput, acceptedArgs); //pass
argMatch("cd1 args", acceptedArgs); //fail
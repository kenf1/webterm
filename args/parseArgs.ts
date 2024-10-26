const exInput: string = "cd args && tsc main.ts";

let exInputArr: string[] = exInput.split(" ");
console.log(exInputArr);

if (exInputArr[0] === "cd") {
    console.log("Changed dir to: " + exInputArr[1]);
} else {
    console.log(exInputArr[0] + " is an invalid input");
}

let acceptedArgs: string[] = ["cd", "mkdir", "ls", "luhn-check", "github"];
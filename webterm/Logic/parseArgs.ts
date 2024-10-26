import { inputX2, prepFunc, sumNumArray } from "./func";

//confirm index 0 is accepted command
export function argIndex0(input: string, refArray: string[]): boolean {
    let inputArr: string[] = input.split(" ");

    if (inputArr.length > 0) {
        if (refArray.includes(inputArr[0])) {
            // console.log("SUCCESS");
            return true;
        } else {
            // console.log(inputArr[0] + " is not an accepted argument");
            return false;
        }
    } else {
        // console.log("No argument provided");
        return false;
    }
}

//run options
export function cmdHandler(inputCmd: string, arg: any | null): string {
    switch (inputCmd) {
        case "help":
            return `Available commands:
- about: About this web app
- github: My github: kenf1
- echo: Print entered arg
- luhn-check: Run Luhn checker on input
- hacker: Attempt to access mainframe
- sudo: Access as admin`;
        case "about":
            return "A terminal clone built with TypeScript + React by kenf1"
        case "github":
            window.open("https://github.com/kenf1", "_blank");
            return "Opening new tab...";
        case "echo":
            return arg ? arg : "Missing argument for `echo` command";
        case "luhn-check":
            //extract digits only
            let tidyInput: string = prepFunc(arg);

            //create array of digits
            let processedArray: number[] = inputX2(tidyInput);

            //sum all digits
            let numSum: number = sumNumArray(processedArray);

            //get result
            if (numSum % 10 === 0) {
                return "Input: " + tidyInput + " -> PASS";
            } else {
                return "Input: " + tidyInput + " -> FAIL";
            }
        case "hacker":
            return "Firewall bypassed. I've broken into the mainframe!!!"
        case "sudo":
            return "Incorrect command. Did you mean `sudoo`?";
        case "sudoo":
            return "So close! Missing another `o`?";
        case "sudooo":
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            return "Opening new tab...";
        default:
            return "Command not available";
    }
}
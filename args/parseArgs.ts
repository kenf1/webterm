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
        console.log("No argument provided");
        return false;
    }
}

//run options
export function cmdHandler(inputCmd: string, arg: any | null): string {
    switch (inputCmd) {
        case "help":
            return `Available commands:
- echo: Print entered arg
- luhn-check: Run Luhn checker on input
- hacker: Attempt to access mainframe
- sudo: Access as admin`;
        case "echo":
            return arg ? arg : "Missing argument for `echo` command";
        case "luhn-check":
            return "...";
        case "hacker":
            return "I've broken into the mainframe."
        case "sudo":
            return "Incorrect command. Did you mean `sudoo`?";
        case "sudoo":
            return "So close! Missing another `o`?";
        case "sudooo":
            return "...";
        default:
            return "Command not available";
    }
}
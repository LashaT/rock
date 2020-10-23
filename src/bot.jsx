import { createMessagePayload } from './utils'

export class Bot {

  // check if the message is a bot command
  // if so, call the appropriate method
  static parseCommand(input) {
    input = input.toLowerCase();

    const isBotCommand = input.includes("!!") && input.substring(0, 2) === "!!";

    if (!isBotCommand) {
      return;
    }

    let splitInput = input.split(" ");
    if (splitInput.length <= 1) {
      return this.invalidOption(splitInput[1]);
    }

    switch (splitInput[1]) {
      case "about":
        return this.aboutCommand();
      case "help":
        return this.helpCommand();
      case "funtranslate":
        return this.funTranslateCommand(splitInput.slice(2, splitInput.length).join(" "))
      default:
        return this.invalidOption(splitInput[1])
    }
  }

  static aboutCommand() {
    return createMessagePayload("bot", `message goes here`);
  }

  static helpCommand() {
    return createMessagePayload("bot", `message goes here`);
  }

  static funTranslateCommand(message) {
    // call the translate api

    return createMessagePayload("bot", `message goes here`);
  }

  static invalidOption(command) {
    return createMessagePayload("bot", `Command "${command}" is not recognized.`);
  }
}

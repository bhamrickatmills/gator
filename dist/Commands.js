import { setUser } from "./config";
export function registerCommand(registry, cmdName, handler) {
    registry[cmdName] = handler;
}
export function runCommand(registry, cmdName, ...args) {
    registry[cmdName](cmdName, ...args);
}
export function handlerLogin(cmdName, ...args) {
    if (args.length <= 0) {
        throw Error("the login handler expects a single arguments, the username.");
    }
    let name = args[0];
    setUser(name);
    console.log("user name set: " + name);
}

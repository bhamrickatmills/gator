import fs from "fs";
import os from "os";
import path from "path";
export function setUser(userName) {
    let config = readConfig();
    let updateConfig = { dbUrl: config.dbUrl, currentUserName: userName };
    writeConfig(updateConfig);
}
function getConfigFilePath() {
    let homePath = os.homedir();
    let pathString = path.join(homePath, "/.gatorconfig.json");
    return pathString;
}
export function readConfig() {
    let filePath = getConfigFilePath();
    let configFile = fs.readFileSync(filePath, { encoding: "utf-8" });
    let configFileRaw = JSON.parse(configFile);
    let config = validateConfig(configFileRaw);
    return config;
}
function writeConfig(cfg) {
    let filePath = getConfigFilePath();
    try {
        fs.writeFileSync(filePath, JSON.stringify({ db_url: cfg.dbUrl, current_user_name: cfg.currentUserName }));
    }
    catch (error) {
        console.log("Failed to write to config file");
    }
}
function validateConfig(rawConfig) {
    return {
        dbUrl: rawConfig.db_url,
        currentUserName: rawConfig.current_user_name ?? "",
    };
}

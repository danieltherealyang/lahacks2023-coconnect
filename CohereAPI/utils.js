const fs = require("fs")

function readJsonFile(){
    const array = JSON.parse(fs.readFileSync("./answer.json", "utf-8"))
        return array
}

function writeJsonFile(data){
    return JSON.stringify(fs.writeFileSync("./answer.json", data))
}

exports.writeToJson = function (data) {
    const existingJson = readJsonFile()
    const updatedJson = JSON.stringify(existingJson.concat(data))
    writeJsonFile(updatedJson)
    
}
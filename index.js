


const eval = require("eval");
const fs = require("fs");

async function run() {
    const fileContent = await fs.promises.readFile("server.bundle.js")
    console.log("fileContent",fileContent)

    const result = eval(
        fileContent,
        /* filename: */ "server.bundle.js",
        /* scope: */ {},
        /* includeGlobals: */ true
    )

    console.log("result",result)
}

run()


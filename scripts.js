import inquirer from "inquirer";
import fs from "fs";
import { exec } from "child_process";

const folders = fs.readdirSync("./packages");

inquirer
  .prompt([
    {
      type: "list",
      name: "folder",
      message: "Select folder",
      choices: folders,
    },
    {
      type: "list",
      name: "script",
      message: "Select script",
      choices({ folder }) {
        const { scripts } = require(`./packages/${folder}/package.json`);

        return [
          ...Object.keys(scripts).filter((script) => script !== "prebuild"),
        ];
      },
      filter: function (val) {
        return val.toLowerCase();
      },
    },
  ])
  .then(({ folder, script }) => {
    const { exec } = require("child_process");
    const child = exec(`cd ./packages/${folder} && yarn ${script}`);

    child.stdout.setEncoding("utf8");

    child.stdout.on("data", (chunk) => {
      // data from standard output is here as buffers
      process.stdout.write(chunk);
    });

    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });

#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const { translateToBoringJS } = require("../src");

const translateToJavaScript = (args) => {
  const inputFilePath = args[2]
  const jsFileName = path.basename(inputFilePath).replace('.sjs', '.js')
  const outputFilePath = args[3] ? path.resolve(args[3], jsFileName) : jsFileName 
  const content = fs.readFileSync(inputFilePath, "utf-8");
  console.log("Your code looks buzzin! Translating to JavaScript...");

  const translatedCode = translateToBoringJS(content);

  fs.writeFileSync(
    outputFilePath,
    translatedCode,
    "utf-8"
  );
  
  console.log(`Successfully created ${path.relative(process.cwd(), outputFilePath)}`)
};

translateToJavaScript(process.argv);

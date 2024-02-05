#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const translateToJavaScript = (inputFilePath, outputFilePath) => {
  const content = fs.readFileSync(inputFilePath, 'utf-8');
  console.log('Your code looks buzzin, fr fr. Translating to JavaScript...')

  const translatedCode = content
    .replace(/fuckaround(\s\{\n[^]*?\n\s*\}\s*)findout\s\((\S*?)\)(\s\{\n[^]*?\n\s*\})/g, (match, tryBlock, errorVar, catchBlock) => {
        return `try${tryBlock}catch (${errorVar})${catchBlock}`;
    }).replace(/(?<!const|let)\syeet\s/gs, () => ' throw ');

  fs.writeFileSync(path.join(__dirname, 'build', outputFilePath), translatedCode, 'utf-8');
}

translateToJavaScript(process.argv[2], 'output.js');

const translateToBoringJS = (content) => content
    .replace(/fuckaround(\s\{\n[^]*?\n\s*\}\s*)findout\s\((\S*?)\)(\s\{\n[^]*?\n\s*\})/g, (match, tryBlock, errorVar, catchBlock) => {
        return `try${tryBlock}catch (${errorVar})${catchBlock}`;
    }).replace(/(?<!const|let)\syeet\s/gs, () => ' throw ');

module.exports = {
    translateToBoringJS
}

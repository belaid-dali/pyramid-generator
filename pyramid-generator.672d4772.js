const character = "*";
const heightInput = document.getElementById('height');
const generateBtn = document.getElementById('generatorBtn');
const pyramidOutput = document.getElementById('puramidOutput');
let inverted = false;
function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const chars = character.repeat(2 * rowNumber - 1);
    return spaces + chars + spaces;
}
function generatePyramid(height) {
    const rows = [];
    for(let i = 1; i <= height; i++){
        const row = padRow(i, height);
        if (inverted) rows.unshift(row);
        else rows.push(row);
    }
    return rows.join("\n");
}
generateBtn.addEventListener("click", ()=>{
    const heightValue = parseInt(heightInput.value);
    if (isNaN(heightValue) || heightValue < 1) {
        pyramidOutput.textContent = "Please enter a valid height!";
        return;
    }
    const pyramid = generatePyramid(heightValue);
    pyramidOutput.textContent = pyramid;
});

//# sourceMappingURL=pyramid-generator.672d4772.js.map

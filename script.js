const character = "*";

const heightInput = document.getElementById('height');
const generateBtn = document.getElementById('generatorBtn');
const pyramidOutput = document.getElementById('puramidOutput');

let inverted = false;

function padRow(rowNumber, rowCount) {
    const spaces = " ".repeat(rowCount - rowNumber);
    const chars = character.repeat(2*rowNumber - 1);
    return spaces + chars + spaces;
}

function generatePyramid(height) {
    const rows = [];
    for (let i = 1; i <= height; i++) {
        const row = padRow(i, height);
        if (inverted) {
            rows.unshift(row);
        } else {
            rows.push(row);
        }
    }
    return rows.join("\n");
}

generateBtn.addEventListener("click", () => {
    const heightValue = parseInt(heightInput.value);
    if (isNaN(heightValue) || heightValue < 1) {
        pyramidOutput.textContent = "Please enter a valid height!";
        return;
    }
    const pyramid = generatePyramid(heightValue);
    pyramidOutput.textContent = pyramid;
});


// Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: false, anim: { enable: true, speed: 1, opacity_min: 0 } },
      size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.3 } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});

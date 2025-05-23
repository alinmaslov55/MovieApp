const colorPicker = document.querySelector("#color-picker");
const fontPicker = document.querySelector("#font-picker");
const resetButton = document.querySelector("#reset-button");


const defaultAccentColor = "#009688";
const defaultFontFamily = "'Poppins', sans-serif";

function startingColor() {
    const savedColor = localStorage.getItem("accentColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--accent-color", savedColor);
        colorPicker.value = savedColor;
    } else {
        document.documentElement.style.setProperty("--accent-color", defaultAccentColor);
        colorPicker.value = defaultAccentColor;
    }
}

function setColor() {
    const selectedColor = colorPicker.value;
    document.documentElement.style.setProperty("--accent-color", selectedColor);
    localStorage.setItem("accentColor", selectedColor);
}

function startingFontFamily() {
    const savedFontFamily = localStorage.getItem("fontFamily");
    if (savedFontFamily) {
        document.documentElement.style.setProperty("--font-family", savedFontFamily);
        fontPicker.value = savedFontFamily;
    } else {
        document.documentElement.style.setProperty("--font-family", defaultFontFamily);
        fontPicker.value = defaultFontFamily;
    }
}

function setFontFamily() {
    const selectedFontFamily = fontPicker.value;
    document.documentElement.style.setProperty("--font-family", selectedFontFamily);
    localStorage.setItem("fontFamily", selectedFontFamily);
}


colorPicker.addEventListener("input", setColor);
fontPicker.addEventListener("input", setFontFamily);

startingColor();
startingFontFamily();

resetButton.addEventListener("click", () => {
    localStorage.removeItem("accentColor");
    localStorage.removeItem("fontFamily");
    startingColor();
    startingFontFamily();
})
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const textInput = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const text = textInput.value.trim();

    if(name === '') {
        alert('Please enter your name.');
        return;
    }
    if(email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if(!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    if(text.length < 20) {
        alert('Please enter a message with at least 20 characters.');
        return;
    }

    alert('Your message has been sent successfully!');
    // Here you would typically send the data to your server

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    textInput.value = '';
    
});

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
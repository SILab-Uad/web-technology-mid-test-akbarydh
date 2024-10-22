// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // Create a variable for the character set based on selected options
    let characterSet = "";
    if (options.includeUppercase) {
        characterSet += uppercase;
    }
    if (options.includeLowercase) {
        characterSet += lowercase;
    }
    if (options.includeNumbers) {
        characterSet += numbers;
    }
    if (options.includeSpecialChars) {
        characterSet += specialChars;
    }

    // Check if at least one character type is selected
    if (characterSet.length === 0) {
        alert("Pilih setidaknya satu tipe karakter.");
        return "";
    }

    // Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked
    };

    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').value = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    document.execCommand('copy');
    alert("Password copied to clipboard!");
});
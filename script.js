function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

        if (/^pet_[a-zA-Z0-9]+$/.test(input)) {
            result = 'Valid Syntax 🟢'; // The input is valid
        } else {
            result = 'Invalid Syntax 🔴';
        }

        document.getElementById('result').innerText = result;
    
}



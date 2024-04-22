// RADIO EMPHASIZE

document.addEventListener('DOMContentLoaded', function() {
    function setupRadioButtons(name) {
        const radios = document.querySelectorAll(`input[type="radio"][name="${name}"]`);
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                radios.forEach(r => {
                    document.querySelector(`label[for="${r.id}"]`).classList.remove('bold-label');
                });
                // Add bold to the selected label
                document.querySelector(`label[for="${this.id}"]`).classList.add('bold-label');
            });
        });
    }

    // Set up radio buttons for question1 and question3
    setupRadioButtons('question1');
    setupRadioButtons('question2');
    setupRadioButtons('question3');
});

function requireInput(name){
    let inputs = document.querySelectorAll(`input[type="text"][name="${name}"]`)
    inputs.forEach(input => {
        input.addEventListener('invalid', () => {
            input.setCustomValidity('Please fill in the required field.')
        });
        input.addEventListener('input', () => {
            input.setCustomValidity(''); // Clears custom validity message
        });
    })
}

requireInput('name');
requireInput('email');
requireInput('phone_number');
requireInput('street_address');
requireInput('city');
requireInput('zip_code');


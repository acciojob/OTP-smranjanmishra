const codes = document.querySelectorAll('.code');
// Add event listeners to each input
codes.forEach((code, index) => {
    code.addEventListener('input', (e) => {
        if (e.target.value.length === 1) {
            // Move to the next input field when a digit is entered
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // If backspace is pressed and input is empty, move to the previous input field
            if (e.target.value === '' && index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});
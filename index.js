
function handleButtonclick() {
    // change the button text when clicked
        const button = document.getElementById('myButton');
        button.textContent = 'You Clicked Me!';
        }
    
        // Add an event listener to the button for the 'click' event
        const button = document.getElementById('myButton');
        button.addEventListener('click', handleButtonclick);
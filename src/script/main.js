document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var nav = document.querySelector('.nav');
        var scrolled = window.scrollY > 0;

        if (scrolled) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    const toggleButton = document.querySelector('.nav-toggle');
    const navBar = document.getElementById('burger-nav-content');

    toggleButton.addEventListener('click', function () {
        if (toggleButton.style.color === 'rgb(93, 123, 134)') { // Adjust the color value based on your styles
            navBar.classList.add('show');
            toggleButton.style.color = '#2f7b92';
            toggleButton.innerHTML = '⨉';
        } else {
            toggleButton.innerHTML = '&#9776';
            navBar.classList.remove('show');
            toggleButton.style.color = '#5d7b86'; // Set it to the original color
        }
    });
    const msgButton = document.getElementById('submit');
    const fillName = document.getElementById('name');

    msgButton.addEventListener('click', function(){
            alert('Your message has been sent. Thank you!');
    });

    //Text Type Animation for the Role Id
    const textToType = "And I am a Data Scientist";
    const typedTextElement = document.getElementById('role');
    let charIndex = 0;
    
    function typeText() {
        const currentText = textToType.slice(0, charIndex++);
        let formattedText = '';

        //To color the word Data Scientist
        if (currentText.includes('Data Scientist')) {
            formattedText = currentText.replace('Data Scientist', '<span class="highlight">Data Scientist</span>');
        }else {
            formattedText = currentText;
        }
        typedTextElement.innerHTML = formattedText;

        if (charIndex <= textToType.length) {
          setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
        }
      }
  
      typeText();
});



const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const apologyLetter = document.getElementById("apologyLetter");
const welcome = document.getElementById("welcome");
const letterTitle = document.getElementById("letterTitle");

// Open the letter
openButton.addEventListener("click", function () {
    apologyLetter.hidden = false;

    openButton.setAttribute("aria-expanded", "true");

    apologyLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Move keyboard focus to the letter heading
    letterTitle.focus({ preventScroll: true });
});

// Close the letter
closeButton.addEventListener("click", function () {
    apologyLetter.hidden = true;

    openButton.setAttribute("aria-expanded", "false");

    welcome.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Return focus to the button that opened the letter
    openButton.focus({ preventScroll: true });
});

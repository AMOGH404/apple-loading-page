// window.addEventListener('load', function() {
//     // Simulate a delay for the loading screen
//     setTimeout(function() {
//         document.querySelector('.loading-container').style.display = 'none';
//         document.querySelector('.content').style.display = 'block';
//     }, 3000); // 3 seconds delay
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("Apple page loaded!");

    // Smooth Scroll for Links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Clicked:", this.innerText);
        });
    });
});
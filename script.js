"use strict";
// script.ts
// Grab the button and the skills section from the DOM
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.querySelector('.skills');
// Add an event listener to toggle the visibility of the skills section
toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || !skillsSection.style.display) {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});

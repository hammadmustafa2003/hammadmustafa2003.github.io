function toggleMenu(button) {
    const bodyStyle = window.getComputedStyle(document.body);
    const sideMenu = document.getElementById('side-menu');

    sideMenu.classList.toggle('active');

    if (button.classList.contains('active')) {
        document.body.style.marginRight = '0';
        button.classList.remove('active');
        sideMenu.classList.remove('active');
    }
    else {
        document.body.style.marginRight = '20rem';
        button.classList.add('active');
        sideMenu.classList.add('active');
    }
}


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    var offset = -15 * window.innerHeight / 100;
    // Calculate the target scroll position by subtracting the offset from the element's top position
    var targetScrollPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
    // Scroll to the target position with smooth behavior
    window.scroll({ top: targetScrollPosition, behavior: 'smooth' });

    event.preventDefault();

    return;
}

var educationCardIndex = 0;

function showOtherCard(direction) {
    educationCards = document.getElementsByClassName("education-card");
    if (educationCardIndex + direction >= 0 && educationCardIndex + direction < educationCards.length) {
        educationCards[educationCardIndex].style.opacity = "0"; // Fade out the current card

        // Slide out the current card to the left or right based on the direction
        if (direction === -1) {
            educationCards[educationCardIndex].classList.add("slide-right");
        } else {
            educationCards[educationCardIndex].classList.add("slide-left");
        }

        setTimeout(function () {
            educationCards[educationCardIndex].style.display = "none"; // Hide the current card after the transition ends
            educationCards[educationCardIndex].classList.remove("slide-right", "slide-left"); // Remove the slide animation class
            educationCardIndex += direction;
            educationCards[educationCardIndex].style.display = "block"; // Show the next card
            educationCards[educationCardIndex].style.opacity = "1"; // Fade in the next card
        }, 300); // Transition duration (milliseconds), adjust as needed
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.getElementsByClassName("project-card");
    const circleContainer = document.querySelector(".circle-container");
  
    // Generate circles based on the number of project cards
    for (let i = 0; i < projectCards.length; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      if (i === 0) {
        circle.style.backgroundColor = "#ffffff";
      }
      circleContainer.appendChild(circle);
    }
  
    // Attach click event listener to each circle
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.addEventListener("click", function () {
        showOtherProject(index - projectCardIndex);
      });
    });
  });
  
  var projectCardIndex = 0;
  
  function showOtherProject(direction) {
    var circles = document.getElementsByClassName("circle");
    var isChanged = false;
    projectCards = document.getElementsByClassName("project-card");
    if (
      projectCardIndex + direction >= 0 &&
      projectCardIndex + direction < projectCards.length
    ) {
      projectCards[projectCardIndex].style.opacity = "0"; // Fade out the current card
  
      // Slide out the current card to the left or right based on the direction
      if (direction === -1) {
        projectCards[projectCardIndex].classList.add("slide-right");
      } else {
        projectCards[projectCardIndex].classList.add("slide-left");
      }
  
      setTimeout(function () {
        projectCards[projectCardIndex].style.display = "none"; // Hide the current card after the transition ends
        projectCards[projectCardIndex].classList.remove("slide-right", "slide-left"); // Remove the slide animation class
        circles[projectCardIndex].style.backgroundColor = "#28a745"
        projectCardIndex += direction;
        circles[projectCardIndex].style.backgroundColor = "#ffffff"
        isChanged = true;
        projectCards[projectCardIndex].style.display = "flex"; // Show the next card
        projectCards[projectCardIndex].style.opacity = "1"; // Fade in the next card
      }, 300);
      // Transition duration (milliseconds), adjust as needed
    }
    return;
  }
  
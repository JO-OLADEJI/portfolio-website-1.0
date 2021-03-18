// ------------------------selections---------------------------
const HTMLbody = document.querySelector('body');
// major links
const toHome = document.querySelector('#to-home');
const toAbout = document.querySelector('#to-about');
const toSkills = document.querySelector('#to-skills');
const toProjects = document.querySelector('#to-projects');
const toContact = document.querySelector('#to-contact');
const reachOutBtn = document.querySelector('#get-in-touch');
// site pages
const homePage = document.querySelector('.home-content');
const aboutPage = document.querySelector('.about-content');
const skillsPage = document.querySelector('.skills-content');
const projectsPage = document.querySelector('.projects-content');
const contactPage = document.querySelector('.contact-content');
// navigation links
const navLinks = document.querySelectorAll('.link');


// --------------------------functions-------------------------
const pageOpenAnimate = () => {
    let bigBox = document.createElement('div');
    bigBox.style.zIndex = 999999;
    let leftBox = document.createElement('div');
    let rightBox = document.createElement('div');
    bigBox.appendChild(leftBox);
    bigBox.appendChild(rightBox);
    HTMLbody.appendChild(bigBox);
    bigBox.classList.add('big-box');
    leftBox.classList.add('left-box');
    rightBox.classList.add('right-box');
    setTimeout(() => {
        bigBox.remove();
    }, 0.5 * 1000);
}

const resetNavLinksColour = (allLinks) => {
    allLinks.forEach(element => {
        element.style.color = 'rgb(187, 187, 187)';
    });
}

// const animateHeaders = (letters) => {
//     anime({
//         'targets': letters,
//         'opacity': [0, 1],
//         'font-size': ['calc(0.1rem + 3vw)', 'calc(2rem + 3vw)'],
//         'delay': anime.stagger(150)
//     });
// }


// -----------------------event listeners-----------------------
// switching page logic
let layer = 5;
toHome.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        homePage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});

toAbout.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        aboutPage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});

toSkills.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        skillsPage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});

toProjects.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        projectsPage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});

toContact.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        contactPage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});

reachOutBtn.addEventListener('click', evt => {
    evt.preventDefault();
    resetNavLinksColour(navLinks);
    // evt.target.style.color = 'rgb(255, 72, 0)';
    pageOpenAnimate();
    setTimeout(() => {
        contactPage.style.zIndex = layer;
    }, 0.15 * 1000);
    ++layer;
});
// [toContact, reachOutBtn].forEach(link => {
//     link.addEventListener('click', evt => {
//         evt.preventDefault();
//         resetNavLinksColour(navLinks);
//         evt.target.style.color = 'rgb(255, 72, 0)';
//         pageOpenAnimate();
//         setTimeout(() => {
//             contactPage.style.zIndex = layer;
//         }, 0.15 * 1000);
//         ++layer;
//     });
// });
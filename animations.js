console.log('hello World');
// --------------------- ANIMATIONS --------------------------
// Auto typing text at the homepage
let index = 1;
const sound = new Audio('./fast-pace.mp3');

function playTypingSound() {
    sound.play();
}
function typeIntroText() {
    let textSpace = document.querySelector('#specialty');
    let textSpace2 = document.querySelector('#specialty2');
    const dynamicText = `Fullstack Web developer, specializing`;
    const dynamicText2 = `in developing Progressive Web Applications.`;

    if (index <= dynamicText.length) {
        textSpace.textContent = dynamicText.slice(0, index);
        ++index;
    }
    else {
        textSpace2.textContent = dynamicText2.slice(0, (index - dynamicText.length));
        index ++
    }
    
    const totalLength = dynamicText.length + dynamicText2.length;
    if (index <= totalLength) {
        setTimeout(typeIntroText, 56);
    }
}

setTimeout(typeIntroText, 3400);
// setTimeout(playTypingSound, 3200);


// animating the reach out link
anime({
    'targets': '#get-in-touch',
    'scale': [0.1, 1],
    'duration': 2000
});
// animating my name
anime({
    'targets': '.letter',
    'opacity': [0, 1],
    'font-size': ['calc(0.1rem + 3vw)', 'calc(2.2rem + 3vw)'],
    'delay': anime.stagger(250)
});
// animating the J
setTimeout(() => {
    anime({
        'targets': '#j',
        'font-size': ['calc(1rem + 3vw)', 'calc(4rem + 3vw)']
    })
}, 7500);
// animating the site major links;
document.querySelectorAll('.link').forEach(x => {
    x.addEventListener('click', e => {
        // console.log(e.target);
        anime({
            'targets': e.target,
            'font-size': ['2.2rem', '3rem']
        });
        setTimeout(() => {
            anime({
                'targets': e.target,
                'font-size': ['3rem', '2.2rem']
            });
        }, 0.3 * 1000);
    });
});
// animating the drop-down-menu in mobile view
const menuBar = document.querySelector('#burger-menu');
const dropDownLinks = document.querySelector('#navigation-bar');
menuBar.addEventListener('click', () => {
    dropDownLinks.classList.toggle('drop-down-menu');
})


// animating each element on hover
// document.querySelectorAll('.letter').forEach(x => {
//     x.addEventListener('click', e => {
//         console.log(e.target);
//         // anime({
//         //     'targets': e.target,
//         //     'font-size': ['2rem', '5rem'],
//         //     'color': ['orange', 'white'],
//         //     'duration': 300
//         // });
//     });
// });
// anime({
//     'targets': '#lone',
//     'color': 'red'
// });


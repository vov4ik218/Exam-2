
$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger,.nav').toggleClass('active');
        $('.burger span').toggleClass('hide');
        $('.burger::before').toggleClass('rotate');
    })
})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

let buttons = document.querySelectorAll('.arrow img');

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        scrollTo(mainscroll);
    })
}

let links = document.querySelectorAll('.list__link');

for (let link of links) {
    link.addEventListener('click', () => {
        if (link.textContent === 'ABOUT US') {
            scrollTo(mainscroll);
        }
        if (link.textContent === 'PROJECTS') {
            scrollTo(project);
        }
        if (link.textContent === 'NEWS') {
            scrollTo(news);
        }
        if (link.textContent === 'CONTACT') {
            scrollTo(contact);
        }

    })
}



// let projectBtns = document.querySelectorAll('.project__btn');
// let moreTexts = document.querySelectorAll('.text-js');

// moreTexts.forEach(function (item) {
//     for (let projectBtn of projectBtns) {
//         projectBtn.addEventListener('click', () => {
//             if (item.style.display === 'none') {
//                 item.style.display = 'inline';
//                 projectBtn.innerHTML = 'HIDE DETAILS';
//             }
//             else {
//                 item.style.display = 'none';
//                 projectBtn.innerHTML = 'MORE DETAILS';
//             }
    
//         })
//     }
// });

let firstBtn = document.querySelector('#first');
let secondBtn = document.querySelector('#second');
let firstText = document.querySelector('.text-js-first');
let secondText = document.querySelector('.text-js-second');

firstBtn.addEventListener('click', () => {
    if (firstText.style.display === 'none') {
        firstText.style.display = 'inline';
        firstBtn.innerHTML = 'HIDE DETAILS';
    }
    else {
        firstText.style.display = 'none';
        firstBtn.innerHTML = 'MORE DETAILS';
    }

})

secondBtn.addEventListener('click', () => {
    if (secondText.style.display === 'none') {
        secondText.style.display = 'inline';
        secondBtn.innerHTML = 'HIDE DETAILS';
    }
    else {
        secondText.style.display = 'none';
        secondBtn.innerHTML = 'MORE DETAILS';
    }

})




const itchio = document.getElementById('itchio-button');
const linkedin = document.getElementById('linkedin-button');

const homeButton = document.getElementById('home-button');
const aboutButton = document.getElementById('about-button');
const portfolioButton = document.getElementById('portfolio-button');
const contactButton = document.getElementById('contact-button');

const mobileDiv = document.getElementById('mobile');

const offWhite = "#FAF5FF";
const offBlack = "#0F0221";
const softPurple = "#9A5BEB";
const deepPurple = "#7910FF";


homeButton.addEventListener('click', () => {
    if(subPage == false){
        window.location.href = 'index.html';
    }else if(subPage == true){
        window.location.href = '../index.html';
    }
});
aboutButton.addEventListener('click', () => {
    if(subPage == false){
        window.location.href = 'about.html';
    }else if(subPage == true){
        window.location.href = '../about.html';
    }
});
portfolioButton.addEventListener('click', () => {
    if(subPage == false){
        window.location.href = 'portfolio.html';
    }else if(subPage == true){
        window.location.href = '../portfolio.html';
    }
});
contactButton.addEventListener('click', () => {
    if(subPage == false){
        window.location.href = 'contact.html';
    }else if(subPage == true){
        window.location.href = '../contact.html';
    }
});
itchio.addEventListener('click', () => {
    window.open('https://sedesdecock.itch.io');
});
linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/sedes-de-cock-90070228a/');
});

switch(currentPage){
    case 'home':
        homeButton.querySelector('svg circle').style.fill = offWhite;
        homeButton.querySelector('p').style.color = softPurple;
        mobileDiv.style.backgroundColor = 'transparent';

    break;

    case 'about':
        aboutButton.querySelector('svg circle').style.fill = offWhite;
        aboutButton.querySelector('p').style.color = softPurple;
    break;

    case 'portfolio':
        portfolioButton.querySelector('svg circle').style.fill = offWhite;
        portfolioButton.querySelector('p').style.color = softPurple;
    break;

    case 'contact':
        contactButton.querySelector('svg circle').style.fill = offWhite;
        contactButton.querySelector('p').style.color = softPurple;

    break;
}



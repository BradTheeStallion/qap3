// Bradley Ayers
// QAP3
// July 22 - 26, 2024

export const capitalizeWords = (str) => {
    if (typeof str !== 'string') return '';
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const faq = () => {
    const faqElement = document.querySelector('.faq');
    const questions = document.querySelector('.questions');
    const mainContent = document.querySelector('.main-content');
    const handleClick = () => {
        questions.style.display = "flex";
        mainContent.style.opacity = 0.3;
    };

    faqElement.addEventListener('click', handleClick);
};

export const homeButt = () => {
    const homeElement = document.querySelector('.homeButton');
    const questions = document.querySelector('.questions');
    const mainContent = document.querySelector('.main-content');
    const handleClick = () => {
        questions.style.display = "none";
        mainContent.style.opacity = 1;
    };

    homeElement.addEventListener('click', handleClick);
};
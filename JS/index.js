const form = document.querySelector('.sign-up-form');
const email = document.querySelector('.email');
const mailError = document.querySelector('.mail-error');

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkEmail = () => {
    const emailValue = email.value.trim();
    if (emailValue === '' || !validateEmail(emailValue)) {
        mailError.classList.remove('hidden');
    } else if (validateEmail(emailValue)) {
        mailError.classList.add('hidden');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
});
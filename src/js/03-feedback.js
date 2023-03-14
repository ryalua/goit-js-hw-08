import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', handleFormSubmit);
refs.form.addEventListener('input', throttle(handleFormInput, 500));

let formInput = {};
const STORAGE_KEY = "feedback-form-state";
storageState();

function handleFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formInput);
};

function handleFormInput(evt) {
    formInput = {
        email: refs.email.value,
        message: refs.message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
};
    
function storageState() {
    const currentState = localStorage.getItem(STORAGE_KEY);
    if (currentState) {
        formInput = JSON.parse(currentState);
        refs.email.value = formInput.email;
        refs.message.value = formInput.message;
    }
}




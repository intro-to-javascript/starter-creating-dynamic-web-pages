/**
  PART 1: BUILT-IN HTML VALIDATION

  Use built-in HTML form validation to:
   - make the first name and last names required fields
   - validate the phone number to ensure it has the format XXX-XXX-XXXX where X represents a digit
   - the past experience text area does not exceed 300 characters.
*/

/** 
  PART 2: USING JAVASCRIPT & CONSTRAINT VALIDATION API

  - MDN: Constraint Validation API: https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)
  - MDN: Constraint Validation: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation
*/

/**
  SELECTORS
*/
const signupForm = document.querySelector(".signup-form");

const addressInput = document.querySelector("#address-line-1");
const otherInterestsTextArea = document.querySelector("#other-interests");

const addressError = document.querySelector("#address-line-1 + span.error");
const otherInterestsError = document.querySelector(
  "#other-interests + span.error"
);

/** 
  EVENT HANDLERS
*/
function handleSignupFormSubmit(event) {
  event.preventDefault();

  !addressInput.validity.valid && handleAddressInput();
  !otherInterestsTextArea.validity.valid && handleOtherInterestsTextAreaInput();

  if (addressInput.validity.valid && otherInterestsTextArea.validity.valid) {
    // send form data
  }
}

// Use JavaScript to display an error message "You must enter a street address"
// below the Address Line 1 box if the field is empty.
function handleAddressInput() {
  addressError.textContent = addressInput.validity.valueMissing
    ? "You must enter a street address"
    : "";
}

// EXERCISE 1: Use JavaScript to display an error message "You must select a topic" below to the Topic dropdown menu if the option selected is "Select One"

// Use JavaScript to display an error message below the text area if the content is
// less than 10 characters long when the user submits the form. Your error message
// should say: "Your comments must be longer than 10 characters. You'd need to enter X
// more characters." where X represents the number of additional characters the user
// needs to input to satisfy the requirement.
// Use validity states to help you: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
function handleOtherInterestsTextAreaInput(event) {
  const otherInterestsValue = otherInterestsTextArea.value;
  const otherInterestsValidity = otherInterestsTextArea.validity;

  if (otherInterestsValidity.valueMissing) {
    otherInterestsError.textContent = "You must describe your interest!";
  } else if (otherInterestsValidity.tooShort) {
    otherInterestsError.textContent = `You must enter more than 10 characters. You'd need to enter ${
      otherInterestsTextArea.getAttribute("minLength") -
      otherInterestsValue.length
    } more characters.`;
  } else {
    otherInterestsError.textContent = "";
  }
}

/** 
  EXERCISE: FORM VALIDATION WITH CONSTRAINT VALIDATION API

  In this exercise, you will use the constraint validation API, plus some form validation attributes, to create some custom error messages for the email input field:

  Specific requirements:
  - It should be a required field. 
    - If the input value is empty, show the error message: "You need to provide an e-mail address."
    - If the field doesn't contain a valid email address, display the following error message: "Please enter a valid e-mail address."
  - The input should have a minimum length of 6 characters.
    - If the provided input is too short, display the following error message: "Email should be at least 6 characters but you entered {X} characters."
  - Perform the validation as the user is typing into the input field (meaning you should use the "input" event), as well as, when the user submits the form.
*/

/** 
  REGISTER EVENT LISTENERS
*/
addressInput.addEventListener("input", handleAddressInput);
otherInterestsTextArea.addEventListener(
  "input",
  handleOtherInterestsTextAreaInput
);
signupForm.addEventListener("submit", handleSignupFormSubmit);

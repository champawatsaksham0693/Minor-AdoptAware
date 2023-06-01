// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAz-fOvBP711V9On8cTRVQprepNYwdNp8I",
    authDomain: "adoptaware-fa402.firebaseapp.com",
    databaseURL: "https://adoptaware-fa402-default-rtdb.firebaseio.com",
    projectId: "adoptaware-fa402",
    storageBucket: "adoptaware-fa402.appspot.com",
    messagingSenderId: "125700089551",
    appId: "1:125700089551:web:e1c23a3e68d6ef26b179ba"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Get the form element
var form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fullName = form.fullName.value;
    var email = form.email.value;
    var mobileNum = form.mobileNum.value;
    var petCategory = form.choice.value;
    var city = form.City.value;
    var state = form.State.value;
    var idType = form.choice.value;
    var idNumber = form.IdNumber.value;

    // Create a new child node in the "adoption" node
    var newAdoptionRef = database.ref('adoption').push();

    // Set the form values as attributes of the new child node
    newAdoptionRef.set({
            fullName: fullName,
            email: email,
            mobileNum: mobileNum,
            petCategory: petCategory,
            city: city,
            state: state,
            idType: idType,
            idNumber: idNumber
        })
        .then(function() {
            // Form submitted successfully
            console.log('Form submitted successfully!');
            alert('Form submitted successfully!');
            form.reset(); // Reset the form fields
        })
        .catch(function(error) {
            // An error occurred
            console.error('Error submitting form: ', error);
            alert('An error occurred. Please try again.');
        });
});
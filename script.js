// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOHm8ETEysPJxkNlyGoFmCeTPsj_YZwc8",
    authDomain: "stup-assignment-1.firebaseapp.com",
    databaseURL: "https://stup-assignment-1-default-rtdb.firebaseio.com",
    projectId: "stup-assignment-1",
    storageBucket: "stup-assignment-1.appspot.com",
    messagingSenderId: "376468974891",
    appId: "1:376468974891:web:ab1c1df624cd63e924a96e",
    measurementId: "G-6X2C8SSD93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

const dataForm = document.getElementById('data-form');
const inputName = document.getElementById('name');//---name
const inputEmail = document.getElementById('email');//---email
const inputPassword = document.getElementById('password');//---password
const inputAgeUnderOver = document.querySelectorAll('input[name="radio"]');//---age
const inputTextArea = document.getElementById('textarea');//---bio
const inputJobRole = document.getElementById('jobRole');//---options
const inputInterests = document.querySelectorAll('input[name="checkbox"]');//---interests

dataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = inputName.value;//---name
    const email = inputEmail.value;//---email
    const password = inputPassword.value;//---password
    const age = Array.from(inputAgeUnderOver).find(input => input.checked)?.value;//---age
    const bio = inputTextArea.value;//---bio
    const options = inputJobRole.value;//---options
    const interests = [...inputInterests]
        .filter(input => input.checked)
        .map(input => input.value);//---interests

    if (name.value !== '' && email.value !== '' && password.value !== '' && bio.value !== '' && options.value !== '' && age && interests.length > 0) {
        // Push the data to the database
        const newDataRef = database.ref('userdata').push();
        newDataRef.set({
            user_Name: name,
            user_Email: email,
            user_Password: password,
            user_Age: age,
            user_Bio: bio,
            user_Options: options,
            user_Interests: interests
        });
        
        inputName.value = '';
        inputEmail.value = '';
        inputPassword.value = '';
        inputAgeUnderOver[0].checked = '';
        inputTextArea.value = '';
        inputJobRole.value = '';
        inputInterests.forEach(input => (input.checked = false));
    }
});


// function UserInfo(){
//     var Name = document.getElementById('name').value;
//     var Email = document.getElementById('email').value;
//     var Password = document.getElementById('password').value;
//     var AgeUnder = document.getElementById('myAgeUnder').value;
//     var AgeOver = document.getElementById('myAgeOver').value;
//     var TextArea = document.getElementById('textarea').value;
//     var JobRole = document.getElementById('jobRole').value;
//     var Development = document.getElementById('development').value;
//     var Design = document.getElementById('design').value;
//     var Business = document.getElementById('business').value;
//     alert('user is' + Name);
    
//     alert('user email is ' + Email);
    
//     alert('user password is ' + Password);
    
//     alert('user age is ' + AgeUnder);
    
//     alert('user age is' + AgeOver);
    
//     alert('user text is' + TextArea);
    
//     alert('user job role is' + JobRole);
    
//     alert('user Interests is' + Development);

//     alert('user Interests is' + Design);

//     alert('user Interests is' + Business);

// };


//----------------------conect--with--firebase--Realtime--Database-------------------------


// Listen for new messages in the database
// database.ref('messages').on('child_added', (snapshot) => {
//     const messageData = snapshot.val();
//     const messageKey = snapshot.key;
    
//     const listItem = document.createElement('li');
//     listItem.innerText = messageData.text;
//     messageList.appendChild(listItem);
// });


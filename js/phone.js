// function updatePhoneNumber (isIncrease){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber;
//     if(isIncrease === true){
//         const newPhoneNumber = previousPhoneNumber + 1;
//     }
//     else{
//         const newPhoneNumber = previousPhoneNumber - 1;
//     }
//     phoneNumberField.value = newPhoneNumber ;
    
//     return newPhoneNumber;
// }

// function updatePhoneTotalNumber(newPhoneNumber){
//     const phoneTotalPrice = newPhoneNumber * 1219;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice ;
// }

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber ;

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice ;
   
    // const newPhoneNumber = updatePhoneNumber(true);
    // updatePhoneTotalNumber(newPhoneNumber)
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber - 1 ;
    phoneNumberField.value = newPhoneNumber ;

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice ;

    // const newPhoneNumber = updatePhoneNumber(false);
    // updatePhoneTotalNumber(newPhoneNumber)
})
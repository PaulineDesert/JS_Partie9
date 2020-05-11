const phoneArray = {FR: '02 31 30 44 57', GB: '07 540 401 314', US: '202 555 0111', CK: '04 31 30 44 57'};

let country = 'FR';

phoneNumber.onclick = function () {
    country = countryName.value;
    console.log(country);
    let cleavePhone = new Cleave('.input-phone', {
        phone: true,
        phoneRegionCode: country
    });
    phoneNumber.placeholder = phoneArray[country];
}

let cleaveDate = new Cleave('.input-date', {
    date: true,
    delimiter: '/',
    datePattern: ['d', 'm', 'Y']
});

let cleaveCB = new Cleave('.input-cb', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        cardType.innerHTML = type;
    }
});

function nameRegexCheck() {
    let idName = document.getElementById('name');
    let nameFormat = /^[a-zA-Zçéè" "/-]+$/;

    console.log(nameFormat.test(idName.value));
}

// function lastNameRegexCheck() {
//     let idLastname = document.getElementById('lastName');
//     let nameFormat = /^[a-zA-Zçéè" "/-]+$/;

//     if (!nameFormat.test(idLastname)) {
//         let nameLength = idLastname.value.length;
//         let nameValue = idLastname.value;
//         nameValue = nameValue.slice(0, -1);
//         idLastname.value = nameValue;
//         idLastname.maxLength = nameLength - 1;
//     }
// }

function lastNameRegexCheck(evenement){
    var charCode; 
    charCode = evenement.keyCode; //Code ascii
    if((charCode >= 65 && charCode <= 90)
    ||(charCode >= 97 && charCode <= 122)
    ||(charCode == 45)
    ||(charCode == 32)){

    return true ;
   }
   //si c'est un chiffre ou autre on n'affiche rien
   else{
    return false ;
    }
}

//regex
const CUS_NAME_REGEX = /^[A-Za-z ]{4,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const CUS_TEL_REGEX = /^[0-9]{2,}$/;
const CUS_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const CUS_NIC_REGEX = /^([0-9]{12}|[0-9V]{10})$/;
const CUS_LICENSE_REGEX = /^[A-Z0-9-]+$/;

//add validations and text fields to the array
let c_vArray = [];
c_vArray.push({field: $("#name"), regEx: CUS_NAME_REGEX, error: 'Name Pattern Is Wrong : A-z'});
c_vArray.push({field: $("#address"), regEx: CUS_ADDRESS_REGEX, error: 'Address Pattern Is Wrong. : A-z'});
c_vArray.push({field: $("#contact_No"), regEx: CUS_TEL_REGEX, error: 'Contact Pattern Is Wrong.'});
c_vArray.push({field: $("#nic"), regEx: CUS_NIC_REGEX, error: 'NIC Pattern Is Wrong.'});
c_vArray.push({field: $("#license"), regEx: CUS_LICENSE_REGEX, error: 'License Pattern Is Wrong.'});
c_vArray.push({field: $("#email"), regEx: CUS_EMAIL_REGEX, error: 'Email Pattern Is Wrong.'});

//clear input field values
function clearCustomerInputFields() {
    $("#name,#address,#contact_No,#nic,#license,#email").val("");
    $("#name,#address,#contact_No,#nic,#license,#email").css("border", "1px solid #ced4da");
    $("#name").focus();
}

/*check validation while typing*/
$("#name,#address,#contact_No,#nic,#license,#email").keyup(function () {
    checkValidity();
});

/*method to check validation*/
function checkValidity() {
    let errCount = 0;
    for (let validation of c_vArray) {
        if (checkCustomer(validation.regEx, validation.field)) {
            inputCusSuccess(validation.field, "");
        } else {
            errCount += 1;
            inputCusError(validation.field, validation.error);
        }
    }
    setCusBtnState(errCount);
}

/*check input value*/
function checkCustomer(regEx, field) {
    let inputValue = field.val();
    return regEx.test(inputValue) ? true : false;
}

/*if value correct*/
function inputCusSuccess(textField, error) {
    if (textField.val().length <= 0) {
        defaultCusText(textField, "");
    } else {
        textField.css('border', '2px solid green');
        textField.parent().children('span').text(error);
    }
}

/*if value wrong*/
function inputCusError(textField, error) {
    if (textField.val().length <= 0) {
        defaultCusText(textField, "");
    } else {
        textField.css('border', '2px solid red');
        textField.parent().children('span').text(error);
    }
}

/*set button status*/
function setCusBtnState(val) {
    if (val > 0) {
        $("#btnSaveCustomer").attr('disabled', true);
    } else {
        $("#btnSaveCustomer").attr('disabled', false);
    }
}

function defaultCusText(textField, error) {
    textField.css("border", "1px solid #ced4da");
    textField.parent().children('span').text(error);
}

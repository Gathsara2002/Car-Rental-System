//regex
const DRI_NAME_REGEX = /^[A-Za-z ]{4,}$/;
const DRI_TEL_REGEX = /^[0-9]{2,}$/;
const DRI_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const DRI_LICENSE_REGEX = /^[A-Z0-9-]+$/;

//add validations and text fields to the array
let c_vArray = [];
c_vArray.push({field: $("#fullName"), regEx: DRI_NAME_REGEX, error: 'Name Pattern Is Wrong : A-z'});
c_vArray.push({field: $("#address"), regEx: DRI_ADDRESS_REGEX, error: 'Address Pattern Is Wrong. : A-z'});
c_vArray.push({field: $("#contact_No"), regEx: DRI_TEL_REGEX, error: 'Contact Pattern Is Wrong.'});
c_vArray.push({field: $("#license_No"), regEx: DRI_LICENSE_REGEX, error: 'License Pattern Is Wrong.'});

//clear input field values
function clearCustomerInputFields() {
    $("#fullName,#address,#contact_No,#license_No").val("");
    $("#fullName,#address,#contact_No,#license_No").css("border", "1px solid #ced4da");
    $("#fullName").focus();
}


/*check validation while typing*/
$("#fullName,#address,#contact_No,#license_No").keyup(function () {
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

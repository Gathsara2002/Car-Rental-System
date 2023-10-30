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
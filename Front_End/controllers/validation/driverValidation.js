//regex
const DRI_NAME_REGEX = /^[A-Za-z ]{4,}$/;
const DRI_TEL_REGEX = /^[0-9]{2,}$/;
const DRI_ADDRESS_REGEX = /^[A-Za-z0-9 ]{5,}$/;
const DRI_LICENSE_REGEX = /^[A-Z0-9-]+$/;

//add validations and text fields to the array
let c_vArray = [];
c_vArray.push({field: $("#fullName"), regEx: CUS_NAME_REGEX, error: 'Name Pattern Is Wrong : A-z'});
c_vArray.push({field: $("#address"), regEx: CUS_ADDRESS_REGEX, error: 'Address Pattern Is Wrong. : A-z'});
c_vArray.push({field: $("#contact_No"), regEx: CUS_TEL_REGEX, error: 'Contact Pattern Is Wrong.'});
c_vArray.push({field: $("#license_No"), regEx: CUS_LICENSE_REGEX, error: 'License Pattern Is Wrong.'});

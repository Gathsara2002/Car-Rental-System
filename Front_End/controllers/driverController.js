/*save driver*/
function saveDriver(){
   let formData = $("#driverForm").serialize();

    $.ajax({
        url: BaseUrl + "diver",
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            alert(resp.responseJSON.message);
        },
        error: function (error) {
            alert(error.message);
        }
    });
}
/*save car*/
function saveCar() {
    let formData = new FormData($("#carForm")[0]);
    console.log(formData);

    $.ajax({
        url: BaseUrl + "car",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (resp) {
            successAlert(resp.message);
        },
        error: function (error) {
            errorAlert(error.message);
        }
    });
}
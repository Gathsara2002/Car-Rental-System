function errorAlert(msg) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
    })
}

function successAlert(msg) {
    Swal.fire({
        icon: 'success',
        title: 'Success...',
        text: msg,
    })
}
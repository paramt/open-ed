const submitSuggestion = () => {
    Swal.fire({
        title: 'Submitted',
        text: 'Your suggestion has been submitted',
        icon: 'success',
        confirmButtonText: 'Back',
        onClose: function() {
            window.location = "/dashboard";
        }
    })
}
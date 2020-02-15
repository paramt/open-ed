window.onload = function() {
    //showSignup();
}

// Focus email text box if ENTER key is pressed on name textbox
document.getElementById("name").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("email").focus();
    }
});

// Click 'Create Account' button if the ENTER key is pressed on email textbox
document.getElementById("email").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});


const showSignup = () => {
    document.getElementById("title").style.fontSize = "60px";
    document.getElementById("next").style.opacity = "0";
    document.getElementById("signup").style.display = "block";
    document.getElementById("right").style.width = "50vw";
    document.getElementById("left").style.width = "50vw";

    document.getElementById("name").focus({preventScroll: true});
}

const createAccount = (name, email) => { 
    if(name == "" || email == "") {
        Swal.fire({
            title: 'Error',
            text: 'Please enter a valid name and email!',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    } else {
        localStorage.setItem("name", name.trim());
        document.getElementById("signup").classList.add("animated","faster", "fadeOut");
        document.getElementById("title").classList.add("animated","faster", "fadePut");
        document.getElementById("right").style.width = "100vw";
        document.getElementById("left").style.width = "0";

        setTimeout(function(){ 
            window.location = "dashboard/index.html";
        }, 1000);
    }
}

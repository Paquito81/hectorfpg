//template_ziw5jhs
//service_5iioa8u
//16_fH1SOUJvHOc-Ju
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
       .sendForm(
           "service_5iioa8u",
           "template_ziw5jhs",
           event.target,
           "16_fH1SOUJvHOc-Ju",
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporary unavailable. Please contact me directly on paquito1981@outlook.com"
        );
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
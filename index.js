// template_vkvs9qi
// service_xd4z3ac
// ZJraL876iW8iLbcaw

function contact(event) {
    event.preventDefault(); // this stops the page from refreshing immediately//
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_xd4z3ac',
            'template_vkvs9qi',
            event.target,
            'ZJraL876iW8iLbcaw'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unvailable. Please contact me directly on..."
            )
        })
    setTimeout(() => { //this timeout helps to see the results without actually sending/wasting emails //
        const loading = document.querySelector('.modal__overlay--loading')
        const success = document.querySelector('.modal__overlay--success')
        loading.classList += " modal__overlay--visible"
        console.log('it worked 1')
    }, 1000);
}

let isModalOpen = false; // we start with false because when the page first loads, the modal is closed//
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList.add("modal--open")
}

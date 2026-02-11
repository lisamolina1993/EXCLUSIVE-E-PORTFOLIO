// template_vkvs9qi
// service_xd4z3ac
// ZJraL876iW8iLbcaw

function contact(event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_xd4z3ac',
    //         'template_vkvs9qi',
    //         event.target,
    //         'ZJraL876iW8iLbcaw'
    // ).then(() => {
    //     console.log('this worked')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--sucess')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => { //this timeout helps to see the results without actually sending/wasting emails //
        loading.classList.remove("modal__overlay--visible");
        success.classList += "modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);
}
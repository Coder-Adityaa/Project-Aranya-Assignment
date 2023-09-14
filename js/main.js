// header scrolled
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// // Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


//  Form Data to Googlesheet

// const form = document.forms['contactform'];
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.querySelector("#sub").value = "Sending..";
//     let data = new FormData(form);
//     fetch('https://script.google.com/macros/s/AKfycbzE0F-X7rAoE75QTTVVrD73sjOPAbygSqmSEZPFwgp2iOfwWCoPoxZx3fmidDACVcULRw/exec', {
//         method: "POST",
//         body: data
//     })
//         .then(res => res.text())
//         .then(data => {
//             document.querySelector("#msg").innerHTML = data;
//             document.querySelector("#sub").value = "Sending";
//         });
// }) 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxQErFit6pIic1QxwH6kZrQ1DZ_EMKhR0gnMn0dIcOtJ8IIG53xXuk5g18jEyyxWrXHew/exec'

const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => alert("Thank you! for reaching us successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
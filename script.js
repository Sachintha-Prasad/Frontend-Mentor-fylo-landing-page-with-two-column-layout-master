const email = document.getElementById("email");
const buttonArea = document.getElementById("button-area");

buttonArea.addEventListener('submit', (e) => {
    let massage = []
    if(email.value == '' || email.value == null){
        massage.push('Please check your email')
    }

    e.preventDefault();
})

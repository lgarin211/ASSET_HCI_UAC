// btnclip 

function renpat() {
    var rangpat = document.getElementsByClassName("rop")
    for (let i = 0; i < rangpat.length; i++) {
        rangpat[i].style.display = "none";
    }
}

function btnclip() {
    renpat();
    var t = true;
    // alert("Hello! I am an alert box!!");
    // email
    const email = document.getElementById('email');
    email.classList.remove('redError');
    var atposition = email.value.indexOf("@");
    var dotposition = email.value.lastIndexOf("."); 
    if (email.value == "") {
        t = t==false?false:false;
        email.classList.add('redError');
        email.outerHTML += `
            <p class="rop">
                Email is required
            </p>`;
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.value.length) {
        email.classList.add('redError');
        email.outerHTML += `
            <p class="rop">
                Please enter a valid e-mail address
            </p>`;
        t = t==false?false:false;
    } else {
        t=t==true?true:false;
        email.classList.remove('redError');
        email.classList.add('greenError');
    }
    // password
    const password = document.querySelector('#password');
    password.classList.remove('redError');
    if (password.value == "") {
        password.classList.add('redError');
        password.outerHTML += `
            <p class="rop">
                Password is required
            </p>`;
        t=t==true?true:false;
    } else if (password.value == "password") {
        password.classList.add('redError');
        password.outerHTML += `
            <p class="rop">
                Password cannot be password
            </p>`;
        t = t==false?false:false;
    } else if (password.value.length < 8) {
        password.classList.add('redError');
        password.outerHTML += `
            <p class="rop">
                Password must be at least 8 characters
            </p>`;
        t = t==false?false:false;
    } else if (password.value.length > 20) {
        password.classList.add('redError');
        password.outerHTML += `
            <p class="rop">
                Password must be less than 20 characters
            </p>`;
        t = t==false?false:false;
    } else {
        t=t==true?true:false;
        password.classList.remove('redError');
        password.classList.add('greenError');
    }

    const username = document.querySelector('#username');
    username.classList.remove('redError');
    if (username.value == "") {
        username.classList.add('redError');
        username.outerHTML += `
            <p class="rop">
                Username is required
            </p>`;
        t = t==false?false:false;
    } else if (username.value.length < 8) {
        username.classList.add('redError');
        username.outerHTML += `
            <p class="rop">
                Username must be at least 8 characters
            </p>`;
        t = t==false?false:false;
    } else if (username.value.length > 20) {
        username.classList.add('redError');
        username.outerHTML += `
            <p class="rop">
                Username must be less than 20 characters
            </p>`;
        t = t==false?false:false;
    } else {
        t=t==true?true:false;
        username.classList.remove('redError');
        username.classList.add('greenError');
    }

    const Age = document.querySelector('#Age');
    Age.classList.remove('redError');
    if (Age.value == "") {
        Age.classList.add('redError');
        Age.outerHTML += `
            <p class="rop">
                Age is required
            </p>`;
        
        t = t==false?false:false;
    } else if (Age.value < 4) {
        Age.classList.add('redError');
        Age.outerHTML += `
            <p class="rop">
                Age must be greater than 4 years
            </p>`;
        t = t==false?false:false;
    } else if (Age.value > 200) {
        Age.classList.add('redError');
        Age.outerHTML += `
            <p class="rop">
                Age must be less than 200 years
            </p>`;
        t = t==false?false:false;
    } else {
        t=t==true?true:false;
        Age.classList.remove('redError');
        Age.classList.add('greenError');
    }

    const accpt = document.getElementById('accpt');
    const shpiaccpt = document.getElementById('shpiaccpt');
    shpiaccpt.innerHTML = ``    
    if (accpt.checked == false) {

        t = t==false?false:false;
        shpiaccpt.innerHTML = `!`
        shpiaccpt.style.color = "red";
    } else {

        t=t==true?true:false;
    }

    if (t == true) {
        alert("Register Success");
        blinkpot();
    }
}


function blinkpot() {
    window.location.href = "Home.html";
}

function pwologin() {
    postlip=document.getElementById("uname");
    literpat=document.getElementById("password");
    //not empty
    if (postlip.value == "" || literpat.value == "") {
        postlip.style.border="solid red";
        literpat.style.border="solid red";
    } else {
        postlip.style.border="solid green";
        literpat.style.border="solid green";
        alert("Login Success");
        blinkpot();
    }

}
let signup = document.getElementById('signup')

signup.addEventListener("submit",(e)=>{
    
    e.preventDefault()

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let detials = {
        name : name,
        email : email,
        country:country,
        phone : phone,
        password : password
    }
    console.log(detials)
})




let signin = document.getElementById('signin')

signin.addEventListener("submit",(e)=>{
    
    e.preventDefault()

    let name = document.getElementById('signin-name').value;
    let email = document.getElementById('signin-email').value;
    let password = document.getElementById('signin-password').value;

    let detials = {
        name : name,
        email : email,
        password : password
    }
    console.log(detials)
})

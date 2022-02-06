const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Add = document.getElementById('Add');
const br = document.getElementById('br');
const cu = document.getElementById('cu');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const AddValue = Add.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	if(AddValue === '') {
		setErrorFor(Add, "fill the Required Details*");
	} else {
		setSuccessFor(Add);
	}
	
	
}
function lockkb(event)
{
	let code=event.which;
	if(code>47 && code<58)
		return false;
	else
		return true;
}
function invalidphone(event)
{
    let code=event.which;
    if(code>64 && code<91)
        return false;
    else
        return true;
}
function lockalpha(event)
        {
            let code=event.which;
            if(code>65 && code<123)
                return false;
            else
                return true;
        }
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function phone(phno)
{
    return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(phno);
}



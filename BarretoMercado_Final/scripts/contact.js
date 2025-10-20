function processInput(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

var letter = /[a-zA-Z]/;
let submit = true;

if (!name || !letter.test(name)) {
    alert('Use letters when putting your name down!');
    submit = false;
    }

    if (!email || !email.includes('@') || !letter.test(email)) {
    alert('Enter a valid email!');
    submit = false;
    }

    if (!message || !letter.test(message)) {
    alert('Use your words, please');
    submit = false;
    }

    if (submit) {
    alert('Message Processed. Thank you for reaching out, and I will get to you as soon as possible!');
    /*An extra process would be done if I were to send the form to an email or to a separate sheet*/
    }
}
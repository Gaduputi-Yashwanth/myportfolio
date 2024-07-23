function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Hello ${name}, we have received your text and we will contact you through your email ${email}.`;
    alert(confirmationMessage);
  }

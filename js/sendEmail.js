const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    console.log

    const fullName = document.getElementById('fname').value;

    const pNumber = document.getElementById('pNumber').value;


    Email.send({
        SecureToken: "74c06a47-6f01-4dd8-a8e3-8d5c5d81847f",
        To: 'kursi@vsezakupki.kz',
        From: 'sultanhahahamaratov@gmail.com',
        Subject: "SnowLeopard Feedback contacts",
        Body: `Имя:             ${fullName}.<br>
               Номер телефона:  ${pNumber}.`
    }).then(showAlert('Ваше сообщение отправлено успешно!'));
    
    // sultanhahahamaratov@gmail.com
    // password 80AC4DD439A67D3C6CDC2F9DB585070706C3

    // abcdDCBA1234#
    clearFields()
}

function showAlert(message) {
    const div = document.createElement('div')
    div.className = 'alert alert-success alert-message';
    div.appendChild(document.createTextNode(message));

    document.querySelector('.wrapper main').appendChild(div);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

function clearFields() {
    document.querySelector('#pNumber').value = '';
    document.querySelector('#fname').value = '';
    document.querySelector('#fCheck').checked = false;
}
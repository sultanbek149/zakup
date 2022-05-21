const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault()


    const fullName = document.getElementById('fname').value;

    const pNumber = document.getElementById('pNumber').value;


    Email.send({
        SecureToken: "74c06a47-6f01-4dd8-a8e3-8d5c5d81847f",
        To:   'kursi@vsezakupki.kz',
        From: 'sultanhahahamaratov@gmail.com',
        Subject: "SnowLeopard Feedback contacts",
        Body: `Name:          ${fullName}.<br>
               Phone number:  ${pNumber}.`
    }).then(console.log('The message has been sent!'));
    
    // sultanhahahamaratov@gmail.com
    // password 80AC4DD439A67D3C6CDC2F9DB585070706C3

    // abcdDCBA1234#
}

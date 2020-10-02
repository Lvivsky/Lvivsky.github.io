let sendMessageForm = document.forms.sendMessageForm;

sendMessageForm.send.addEventListener('click', function() {
    let name = sendMessageForm.name.value;
    let phone = sendMessageForm.phone.value.replace(')', ') +');
    let message = sendMessageForm.message.value;

    if (name === '' || name.length < 4) {
        alert('Please, enter your name correctly.');
        return;
    };
    if (phone === '+ (380) ' || typeof(phone*1) !== 'number') {
        alert('Please, enter your phone correctly.');
        return;
    };
    if (message === '') {
        alert('Please, send me a message.');
        return;
    };
    setInfo(name, phone, message);
});

// secret key (don't tell anyone): 1194657725:AAFvPSTyY18oYWBpPTAILwfGZUzXRco2LN0
function setInfo(name, phone, message) {
    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1194657725:AAFvPSTyY18oYWBpPTAILwfGZUzXRco2LN0/sendMessage?text=Name: <${name}>    Phone: + ${phone}    Message: ${message}&chat_id=-386591013`, false);
    postInfo.send();
};
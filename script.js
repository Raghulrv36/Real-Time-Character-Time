var message = document.getElementById('message');
var counter = document.getElementById('counter');
var warning = document.getElementById('warning');
var maxChars = 200;

message.addEventListener('input', function() {
    var currentLength = message.value.length;
    counter.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength >= maxChars) {
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
    }
});
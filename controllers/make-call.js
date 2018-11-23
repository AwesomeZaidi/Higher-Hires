var video_out = document.getElementById("vid-box");
function login(form) {
    var phone = window.phone = PHONE({
        number        :  form.username.value || "Anonymous", // listen on username line else Anonymous
        publish_key   : 'pub-c-3b06bc4e-a45c-4ece-ae2b-97c2934f5163',
        subscribe_key : 'sub-c-9f9f06a8-dfbd-11e6-a291-0619f8945a4f',
    });

phone.ready(function(){ form.username.style.background="#55ff5b"; });
phone.receive(function(session){
    session.connected(function(session) { video_out.appendChild(session.video); });
    session.ended(function(session) { video_out.innerHTML=''; });
});
return false;   // So the form does not submit.
}

function makeCall(form){
    if (!window.phone) alert("Login First!");
    else phone.dial(form.number.value);
    return false;
}
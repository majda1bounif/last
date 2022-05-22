let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Chitti", "Hi, I am a Robo", "Hello, My name is Chitti"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let gret = ['hello', 'hi', 'hey']
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang ="en"
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript.toLowerCase()));
    chatbotvoice(transcript);
    console.log(transcript);
}




mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
})

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.volume = 1;
    speech.text ="repeat please";
    if(message.includes('Who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    else if(message.includes('Who are you'|| 'name')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    else if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    else if(message.includes('How are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    else if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    else if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    else if(message.includes('talk to you' || 'Talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    else if(message.includes('Hello' || 'hi'||'hey'))
    {
        let finalresult = gret[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    else if(message.includes('open google'||'google'||'ok google'))
    {
        let finalresult = "Opening Google";
        //window.open("https://google.com", "_blank");
        //let finalresult = "Opening Google";
        speech.text = finalresult;
    }
    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        let finalresult = "Opening instagram";
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onend=function(){
    mic.style.background="#ff3b3b";
}

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
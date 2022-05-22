
//const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
let p = document.createElement("p");
let gret=["Hello Boss", "hi Majda", "hey how it is going?"]
wrong = ["something went wrong"]
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.lang = "en";
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    //speak("Activating Alex");
    //speak("Going online");
    //wishMe();
})
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang="en";

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US"
    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        wishMe()
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you?";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Alex";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time'||'What time is it?'|| "What's the current time?"|| 'Tell me the time.'))
    {   time_resp()
        speech.text = finalText;
    }

    else if (message.includes("date"))
    {
        getTodayDate()
        speech.text = finalText;
    }


    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if (message.includes('youtube'))
    {
       window.open("https://www.youtube.com/");
        const finalText = "Opening youtube boss"
        speech.text = finalText;
    }
    else if (message.includes("search"))
    {
      let playStr = message.split("");
      playStr.splice(0, 7);
      let videoName = playStr.join("");
      playStr = playStr.join("").split(" ").join("+");
      const finalText = `searching youtube for ${videoName}`;
      window.open(`https://www.youtube.com/search?q=${playStr}`);
      speech.text = finalText;
    }
    else if (message.includes("camera"))
    {
     const finalText = 'opening camera';
     window.location = 'camera.html';
     speech.text = finalText
     }
     else if (message.includes("play"))
     {
      let playStr = message.split("");
      playStr.splice(0, 5);
      let videoName = playStr.join("");
      playStr = playStr.join("").split(" ").join("+");
      const finalText = `playing youtube for ${videoName}`;
      song_resp(message)
      speech.text = finalText
     }
     else if (message.includes("wear")||message.includes("what should I wear")||message.includes("clothes"))
     {
      clothing()
      speech.text = finalText
     }
     else if (message.includes('nasa')||message.includes('show the picture of the day')||message.includes("what's today picture")|| message.includes('show me the picture'))
     {
       nasa_resp()
       speech.text = finalText
     }
     else if (message.includes('joke'))
     {
       getJoke()
       speech.text = finalText;
     }
     else if (message.includes("news"))
     {
      getNews()
      speech.text = finalText
    }
    else if (message.includes('directions'))
    {
     let arr = message.split("");
     arr.splice(0,10);
     let query = arr.join("");
     const finalText = `finding direction to ${query}`;
      window.open(
          `http://maps.google.com/maps/?q=directions to${query}`,
          "_blank"
        );
      speech.text = finalText
    }
    else if (message.includes('email'))
    {
       let body = message.split('subject')[1].trim(
       email(message))
       speak('verify your email and click send button if you do not mind')
       speech.text = finalText
    }
    else if (message.includes('hot')|| message.includes('is it hot')||message.includes('temperature'))
    {
     weather()
     speech.text = finalText
    }
    else if (message.includes('weather'))
    {
     forcast(message)
     speech.text = finalText
    }
    else if (message.includes('location'))
    {
      const finalText = 'getting your location';
      window.location = 'location.html';
      speech.text = finalText
    }
    else if (message.includes('random number'))
    {
      random();
      speech.text = finalText;
    }
    else if(message.includes('do'))
    {
      operation(message)
      speech.text = finalText;
    }



















    //else {
        //window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        //const finalText = "I found some information for " + message + " on google";
        //speech.text = finalText;
   // }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

function getTodayDate()
{
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var weekDay = days[d.getDay()];
    var year = d.getFullYear();
    speak("Today date is "+weekDay+" "+date+" "+month+" "+year);
}
async function song_resp(query) {
    query = query.replace('play', '');
    let track = query.split('by')[0].trim();
    let artist = query.split('by')[1];

    if (query.includes('what is love')) {
        track = 'what is love';
        artist = 'Haddaway';
    }

    if (!artist || artist === '') {
        artist = '';
    } else {
        artist = artist.trim();
    }
    track = track.replace(/[^\w\s]/gi, '');
    artist = artist.replace(/[^\w\s]/gi, '');
    fetch('https://www.googleapis.com/youtube/v3/search?q=' +
        track +
        ' ' +
        artist +
        '&part=snippet&maxResults=10&order=relevance&type=video&key=AIzaSyBoRMzRPZfP4dqeTh3TA77teDIRXuqk1yg')
        .then(res => res.json())
        .then(data => {
            var nameval = data['items']['0']['snippet']['title']
            var vidId = data['items']['0']['id']['videoId']
         data = `The weather in ${nameval} is currently ${vidId}`;
         return window.open(`https://www.youtube.com/watch?v=${vidId}`)

        })
}

const type_wardrobe = {
    rain: 'a jacket',
    snow: 'a scarf and gloves',
    sun: 'some sun glasses',
    clear: 'a t-shirt and shorts',
    wind: 'a jumper',
    mist: 'a hat',
};

function clothing(){
         fetch('https://api.openweathermap.org/data/2.5/weather?q=krasnodar&appid=bd89a0d0265b53ccfb289b56b1785edc')
        .then(res => res.json())
        .then(data => {
            var ha = data['weather']['0']['main']
         data =` ${ha}`.toUpperCase();
         //console.log(data)
         if (data.includes('CLOUDS'))
         {
             clothes = type_wardrobe.clear;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)

         }
         else if (data.includes('RAIN'))
         {
             clothes = type_wardrobe.rain;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)
         }
         else if (data.includes('SNOW'))
         {
             clothes = type_wardrobe.snow;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)
         }
          else if (data.includes('SUN'))
         {
             clothes = type_wardrobe.sun;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)
         }
          else if (data.includes('WIND'))
         {
             clothes = type_wardrobe.wind;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)
         }
          else if (data.includes('MIST'))
         {
             clothes = type_wardrobe.mist;
             response = `Looks like ${data}, better wear ${clothes}`;
             speak(response)
         }

        })
}


async function nasa_resp() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=4KfSk6JC0Vd4dQArlFRskLSNduEP5lnZ9mK5YOJp')
    .then(res => res.json())
        .then(data => {
            title = data['title']
            copy = data['copyright']
            image = data['url']
            data = `its title is ${title} copyright ${copy}`;
            speak(data)
         return window.open(image)
        })

}
async function time_resp() {
    const time = new Date().toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
    });

    return speak('It is ' + time );
}


function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(res => res.json())
    .then(data =>{
        joke = data['joke']
        dt = `${joke}`
    return speak(dt)
        })
  }
 async function getNews(){
  var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a7fb6c4a1d3644ac872439d67a0bf250"
  var req = new Request(url)
  await fetch(req).then((response) => response.json())
  .then((data) => {
    console.log(data);
    let arrNews = data.articles
    arrNews.length = 10
    let a = []
    arrNews.forEach((e,index) => {
      a.push(index+1)
      a.push(".........")
      a.push(e.title)
      a.push(".........")
      return a

    });
    speak(a)
  })
}


function email(query)
{
    const address = {
    Alex: 'benmyrat@gmail.com',
    friend : 'naima1benhadia@gmail.com',
      }
    query = query.replace('email ', '');
    let rec = query.split('subject')[0].trim();
    let body = query.split('topic')[1].trim();
    let sub = query.substring(
    query.lastIndexOf("subject")+ 7,
    query.lastIndexOf("topic"))
    if (query.includes('Alex') ||query.includes('alex') || query.includes('ALEX'))
         {
             rec = address.Alex;
         }
    else if (query.includes('friend') ||query.includes('Friend') || query.includes('FRIEND'))
         {
             rec = address.friend;
         }
    else {
      speak('I guess something went wrong')
    }
         return window.open(`mailto:${rec}?subject=${sub}&body=${body}`,
          "_blank");

}
function convertion(val){
    return (val - 273).toFixed(2)}
function weather()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q=krasnodar&appid=9fdd9f5cf42b967c1962c0ae9266954b')
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

         data =`The weather in ${nameval} is currently ${descrip}
    with a temperature of ${convertion(tempature)} degree celcius,
    and wind speed reaching ${wndspd} kilometers per hour`;
    //console.log(data)
    speak(data)
    })
}

function forcast(query)
{
    query = query.replace('weather ', '');
    let city = query.split(' ')[0].trim();
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=9fdd9f5cf42b967c1962c0ae9266954b')
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

         data =`the weather in ${nameval} is ${descrip}
    with a temperature of ${convertion(tempature)} degree celcius`;
    speak(data)
    })
}
function random()
{
 return speak(Math.floor(Math.random() * 100) + 1)
}
function operation(query) {
    const data = query.split(" ");
    num1 = parseInt(data[1]);
    symb = data[2];
    num2 = parseInt(data[3]);
    if (symb.includes('+')||symb.includes('add')||symb.includes('plus')||symb.includes('addition'))
    {
        speak(Math.floor(num1+num2))
    }
    else if (symb.includes('-')||symb.includes('minus')||symb.includes('min')||symb.includes('substraction'))
    {
        speak(Math.floor(num1-num2))
    }
    else if (symb.includes('*')||symb.includes('multiply')||symb.includes('multiple')||symb.includes('multiplication'))
    {
        speak(Math.floor(num1*num2))
    }
    else if (symb.includes('/')||symb.includes('divide')||symb.includes('division')||symb.includes('div'))
    {
        speak(Math.floor(num1/num2))
    }
    else if (symb.includes('power')||symb.includes('**')||symb.includes('pow')||symb.includes('powe'))
    {
        speak(Math.floor(num1**num2))
    }
    else
    {
        speak('Math.floor(num1%num2)')
    }


}
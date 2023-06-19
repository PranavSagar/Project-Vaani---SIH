const ecpress =require('express');
const app =express();
const port=3000;

const VoiceResponse =  require('twilio').twiml.VoiceResponse
app.all('/',(request,respose) => {
respose.type('xml');
const twiml=new VoiceResponse();
twiml.say('Hello');
const gather =twiml.gather({
input:'dtmf',
action:'/results'});


gather.say('presss 1 for')
    response.send(twiml.toString())
})
 


app.all('/results',(request,response) =>{


    const userInput=request.body.digest;
    const twiml=new VoiceResponse();
    switch(request.body.Digits){
        case '1':
            twiml.say('option 1 selected');
            break;
            case '2':twiml.say('option 2 selected')
            break;

    }
    app.listen(port,()=>
    
    {console.log('exmapleapp ')})
})
 
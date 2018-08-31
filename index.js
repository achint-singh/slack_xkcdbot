const SlackBot = require('slackbots');
const axios = require('axios');
require('dotenv').config();
const botToken = process.env.BOT_TOKEN;

// Initialize Bot
const bot = new SlackBot({
    token: `${botToken}`,
    name: 'xkcdbot'
});

// On Start
bot.on('start', () => {
    const params = {
        icon_emoji: ':bowtie:'
    };

    bot.postMessageToChannel('general', 'Provides a daily dose of xkcd humor! Type @xkcdbot followed by "help" to learn more', params);
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }
    if(data.subtype === 'bot_message') {
        return;
    }
    else {
        handleMessage(data.text);
    }
});

// Response
function handleMessage(message) {
    if(message.includes(' recent')) {
        recentComic();
    }

    else if(message.includes(' random')) {
        randomComic();
    }

    else if(message.includes(' help')) {
        help();
    }

    else {
        invalid();
    }
}

function recentComic() {
    console.log("recentComic");
    axios.get('http://xkcd.com/info.0.json')
     .then(res => {
         const image = res.data.img;
         const title = res.data.title;

     const params = {
        icon_emoji: ':bowtie:'
    };

    bot.postMessageToChannel('general', `${title}: ${image}`, params);
    })
}

function randomComic() {
    console.log("randomComic");
    var randomNum = Math.floor(Math.random() * Math.floor(4000))+1;
    console.log(randomNum);
    axios.get(`http://xkcd.com/${randomNum}/info.0.json`)
     .then(res => {
         const image = res.data.img;
         const title = res.data.title;

         const params = {
            icon_emoji: ':bowtie:'
        };
    
        bot.postMessageToChannel('general', `${title}: ${image}`, params);
     })
     .catch(error => {
        randomComic();
     })
}

function help() {
     const params = {
        icon_emoji: ':bowtie:'
    };

    bot.postMessageToChannel('general', 'Type @xkcdbot followed by "recent" or "random" to get a comic!', params);
}

function invalid() {
    const params = {
        icon_emoji: ':bowtie:'
    };

    bot.postMessageToChannel('general', 'Invalid Message. Please type @xkcdbot followed by "help" to learn the commands', params);
}

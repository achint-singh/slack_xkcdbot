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
    }

    bot.postMessageToChannel('general', 'Provides a daily dose of xkcd humor! Enter "@xkcd help" to learn more', params);
});

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        provideInput();
    }
    else {
        handleMessage(data.text);
    }
});

// Respon
function handleMessage(message) {
    if(message.includes(' recent')) {
        recentComic();
    }

    if(message.includes(' random')) {
        randomComic();
    }

    if(message.includes(' help')) {
        help();
    }
}

function recentComic() {
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
    var randomNum = Math.random();
    axios.get(`http://xkcd.com/info.${randomNum}.json`)
     .then(res => {
         const image = res.data.img;
         const title = res.data.title;

     const params = {
        icon_emoji: ':bowtie:'
    };

    bot.postMessageToChannel('general', `${title}: ${image}`, params);
    })
}

function recentComic() {
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

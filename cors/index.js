const cors = require('cors');

const corsOptions = {
    origin: 'https://live-edge17.bcvcdn.com/hls/stream_MickyCross/public-aac/stream_MickyCross_240/chunks.m3u8',
    optionsSuccessStatus: 200,
};
module.exports = cors(corsOptions);
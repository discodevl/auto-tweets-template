const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "hlqoSBKqwmAEaRqyn7UVtXw3K",
    appSecret: "eTIzb22tqq5XB46O3pOn5iPHlWU6zmJM5tRU7Z94uUyPjgUwFj",
    accessToken: "1250489885477257217-RddbH1R4Xbot3zbHAc1WAWIMZj19dM",
    accessSecret: "4zQ9qjfMqMZqfedeFPcJOX9pYXCoYV8lJSFuDm2S4Eorn",
});

const rwClient= client.readWrite;

module.exports = rwClient;
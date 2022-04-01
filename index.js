const  rwClient = require("./TwitterClient");

async function tweet() {
    try {
        await rwClient.v1.tweet("?abab?");
    } catch(error) {
        console.log(error.message);
    }
}

tweet();
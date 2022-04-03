import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

const client = new TwitterApi({
    appKey: 'OhIVrSCzyHwDvjcbBbQLKllB0',
    appSecret: 'K935i735qYiGveXAtfADwV2DbJb7yQonwuxAEnhsALit243aCl',
    accessToken: '1509929690559045635-sKC0iQN6V4LCCzHVcAHYfQrGIFvcVe',
    accessSecret: 'Ei3mGQcNnt6A99F5q7fTIXbyrse4nYHcacja2uPOu4ijh',
});

const rwClient = client.readWrite;
export {rwClient};

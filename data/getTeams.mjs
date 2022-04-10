import { firestore } from "../util/firebase.mjs";
import cron from "node-cron";

let teams = [];

async function getTeams() {
  await firestore
    .collection("Bot")
    .doc("teams")
    .get()
    .then((data) => {
      teams = data.data().teams_arr;
    });
}

await getTeams();  

cron.schedule("*/30 * * * *", async() => {
  await getTeams();  
});

export {teams};


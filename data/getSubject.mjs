import { firestore } from "../util/firebase.mjs";
import cron from "node-cron";

let subjects = [];
//
async function getSubjects() {
  await firestore
    .collection("Bot")
    .doc("subjects")
    .get()
    .then((data) => {
      subjects = data.data().subjects_arr;
    });
}

await getSubjects();

cron.schedule("*/30 * * * *", async() => {
  await getSubjects();  
});

export {subjects};
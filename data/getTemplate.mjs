import { firestore } from "../util/firebase.mjs";
import cron from "node-cron";

let templates = [];

async function getTemplates() {
  await firestore
    .collection("Bot")
    .doc("templates")
    .get()
    .then((data) => {
      templates = data.data().template_arr;
    });
}

await getTemplates();  

cron.schedule("*/30 * * * *", async() => {
  await getTemplates();  
});

export {templates};


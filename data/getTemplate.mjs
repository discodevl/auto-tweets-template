import { firestore } from "../util/firebase.mjs";

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

export {templates};


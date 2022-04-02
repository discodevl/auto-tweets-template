import { firestore } from "../util/firebase.mjs";

let subjects = [];

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

export {subjects};
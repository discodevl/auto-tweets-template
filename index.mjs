import { rwClient } from "./TwitterClient.mjs";
import cron from "node-cron";
import { templates } from "./data/getTemplate.mjs";
import { subjects } from "./data/getSubject.mjs";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

async function generateTweet() {
  const shuffledSubjects = shuffleArray(subjects);
  const shuffledTemplates = shuffleArray(templates);

  const subjectIndex = Math.floor(Math.random() * subjects.length);
  const subject = shuffledSubjects[subjectIndex];
  const templateIndex = Math.floor(Math.random() * templates.length);
  const template = shuffledTemplates[templateIndex];

  let result = template.replace("@", subject);
  return result;
}

async function tweet() {
  try {
    const tweet = await generateTweet();
    console.log({ tweet });
    await rwClient.v1.tweet(tweet);
  } catch (error) {
    console.log(error.code);
  }
}

function main() {
  cron.schedule("*/60 * * * *", () => {
    console.log(`${new Date().toString()} - tweet`);
    tweet();
  });
}

main();

import { rwClient } from "./TwitterClient.mjs";
import cron from "node-cron";
import { templates } from "./data/getTemplate.mjs";
import { subjects } from "./data/getSubject.mjs";

async function generateTweet() {
  const subjectIndex = Math.floor(Math.random() * subjects.length);
  const subject = subjects[subjectIndex];
  const templateIndex = Math.floor(Math.random() * templates.length);
  const template = templates[templateIndex];
  
  let result = template.replace("@", subject);
  return result;

}

async function tweet() {
  try {
    const tweet = await generateTweet();
    await rwClient.v1.tweet(tweet);
  } catch (error) {
    console.log(error.message);
  }
}
console.log({ templates });
console.log({ subjects });

function main() {
  cron.schedule("*/25 * * * *", () => {
    console.log(`${new Date().toString()} - tweet`);
    tweet();
  });
}

main();

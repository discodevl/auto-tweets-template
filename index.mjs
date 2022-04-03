import { rwClient } from "./TwitterClient.mjs";
import cron from "node-cron";
import { templates } from "./data/getTemplate.mjs";
import { subjects } from "./data/getSubject.mjs";
// import express from "express";

// let app = express();

// app.set('port', 5000);

// app.get('/', function(request, response) {
//   var result = 'App is running'
//   response.send(result);
// }).listen(app.get('port'), function() {
//   console.log('App is running, server is listening on port ', app.get('port'));
// })

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
  cron.schedule("*/1 * * * *", () => {
    tweet();
  });
}

main();

import { rwClient } from "./TwitterClient.mjs";
import cron from "node-cron";
import { templates } from "./data/getTemplate.mjs";
import { subjects } from "./data/getSubject.mjs";
import { teams } from "./data/getTeams.mjs"

async function generateTweet() {
  const subjectIndex = Math.floor(Math.random() * subjects.length);
  const subject = subjects[subjectIndex];
  let subjectIndex2 = Math.floor(Math.random() * subjects.length);
  const subject2 = subjects[subjectIndex2];
  while(subjectIndex === subjectIndex2) {
    subjectIndex2 = Math.floor(Math.random() * subjects.length);
  }

  const teamIndex = Math.floor(Math.random() * teams.length);
  const team = teams[teamIndex];
  let teamIndex2 = Math.floor(Math.random() * teams.length);
  const team2 = teams[teamIndex2];
  while(teamIndex === teamIndex2) {
    teamIndex2 = Math.floor(Math.random() * subjects.length);
  }

  const templateIndex = Math.floor(Math.random() * templates.length);
  const template = templates[templateIndex];

  let result = template.replace("[sub]", subject);
  result = result.replace("[sub2]", subject2);

  result = result.replace("[team]", team);
  result = result.replace("[team2]", team2);
  
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

//

function main() {
  cron.schedule("0 */1 * * *", () => {
  tweet();
  });
}

main();

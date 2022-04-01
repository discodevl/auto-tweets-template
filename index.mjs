import { rwClient } from "./TwitterClient.mjs";
import { CronJob } from "cron";
import { templates } from "./data/getTemplate.mjs";

async function tweet() {
  try {
    await rwClient.v1.tweet("agente so queremos brincar ha ha ha");
  } catch (error) {
    console.log(error.message);
  }
}

// const cjob = new CronJob("*/25 * * * *", () => {
//     console.log(`${new Date().toString()} - tweet`);
//     tweet();
// });
console.log({templates});
// cjob.start();

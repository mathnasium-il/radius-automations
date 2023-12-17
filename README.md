# Radius Automations
 Automations to retrieve KPI and contact data from the Radius CRM used by Mathnasium learning centers.

## How to run:
* In the root directory, run `npm install` to download all dependencies.
* **Retrieving event data:** Run `nodemon activities.js DURATION`, where the `DURATION` parameter is either an integer repesenting the number of hours that the automation should remain active for, or "endless" if the automation is intened to be run indefinitely.
> **Note:** If `0` is the argument entered as the `DURATION`, the automation will run exactly one. If "endless" is entered, a warning message will appear in the console before proceeding with the automation.

## Technologies used:
* Node
* Firebase
* Puppeteer

## Dependencies used:
* `dotenv`: To securely store confidential environment variables
* `firebase`: To upload retrieved data into a database
* `nodemon`: To automatically restart the node application when file changes in the directory are detected.
* `puppeteer`: To automate data retrieval from the Radius CRM.
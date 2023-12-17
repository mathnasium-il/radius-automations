import { delay } from "./helpers.js";

export const USERNAMES = ["Jamal.Riley"]; // "Jamal.Riley", "Jamal.Riley1"
export const USERNAME = USERNAMES[0];
export const RADIUS_INFO = new Map([
  [
    "Jamal.Riley",
    {
      directoryName: "clover-z",
      franchisee: "Clover Z",
      hasTextingEnabled: true,
    },
  ],
  [
    "Jamal.Riley1",
    {
      directoryName: "maja",
      franchisee: "MAJA",
      hasTextingEnabled: false,
    },
  ],
]);

export async function logIntoRadius(page, username, franchisee) {
  await page.goto("https://radius.mathnasium.com/Account/Login");
  let url = page.url();
  while (url.includes("Login")) {
    await page.type("#UserName", username);
    await page.type("#Password", process.env.RADIUS_PWD);
    await Promise.all([page.click("#login"), page.waitForNavigation()]);
    url = page.url();
  }
  await process.stdout.write(`${franchisee}: Login successful. `);
}

export async function loadActivities(page, hasTextingEnabled) {
  const pressButtonNTimes = (button, n) => {
    for (let i = 0; i < n; i++) page.keyboard.press(button);
  };
  const tabPresses = hasTextingEnabled ? 8 : 7;
  const currDate = new Date();

  await process.stdout.write("Fetching activities...");
  await page.goto("https://radius.mathnasium.com/MyActivities");
  await pressButtonNTimes("Tab", tabPresses);
  await page.keyboard.type("Event", { delay: 125 });
  await pressButtonNTimes("Tab", 3);
  await page.keyboard.type("All", { delay: 125 });
  await page.type("#startDateSelect", `01/01/${currDate.getFullYear()}`, {
    delay: 125,
  });
  await pressButtonNTimes("Tab", 1);
  await page.keyboard.press("Backspace");
  await page.type("#endDateSelect", `12/31/${currDate.getFullYear()}`, {
    delay: 125,
  });
  await page.click("#activityToggle");
  await page.waitForSelector(".k-master-row");
  await delay(10);
}

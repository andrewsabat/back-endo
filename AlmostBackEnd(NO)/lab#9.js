const webdriver = require('selenium-webdriver');

async function startScrap() {
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get("https://www.shazam.com/ru/charts/top-50/world");
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.className('ellip')));
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.css("[data-shz-audio-url]")));
    await driver.sleep(1000);

    let linkAddresses = await driver.findElements(webdriver.By.css("[data-screenname]"));
    let songs = await driver.findElements(webdriver.By.className('ellip'));

    for (let i = 0; i <= 99; i++) {
        await
            songs[i].getText().then((text) => {
                if (i % 2 === 0) {
                    console.log();
                    linkAddresses[i / 2].getAttribute("data-shz-audio-url").then((link) => {
                        console.log("Link: " + link);
                    });
                    console.log("Songname: " + text);
                } else {
                    console.log("By artist: " + text);
                }
            });
    }
}

startScrap();
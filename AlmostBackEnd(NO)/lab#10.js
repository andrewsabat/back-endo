const webdriver = require('selenium-webdriver');
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

async function startScrap() {
    let driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get("https://www.shazam.com/ru/charts/top-50/world");
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.className('ellip')));
    await driver.wait(webdriver.until.elementsLocated(webdriver.By.css("[data-shz-audio-url]")));
    await driver.sleep(1000);

    let linkAddresses = await driver.findElements(webdriver.By.css("[data-screenname]"));
    let songs = await driver.findElements(webdriver.By.className('ellip'));

    let songsList = [];
    let objLink;
    let objSongName;
    let objArtist;

    for (let i = 0; i <= 99; i++) {
        await
            songs[i].getText().then((text) => {
                if (i % 2 === 0) {
                    objSongName = text;
                    linkAddresses[i / 2].getAttribute("data-shz-audio-url").then((link) => {
                        objLink = link;
                        songsList.push({
                            link: objLink,
                            songname: objSongName,
                            artist: objArtist,
                        });
                    });
                } else {
                    objArtist = text;
                }
            });
    }
    await MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        let db = client.db("shazam_top");
        db.collection("songs_info").insertMany(songsList, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            client.close();
        });
    });
}

startScrap();
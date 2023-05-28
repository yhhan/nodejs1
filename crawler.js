const axios = require("axios");
const cheerio = require("cheerio");

async function main() {
  const resp = await axios.get(
      "https://yjiq150.github.io/coronaboard-crawling-sample/dom"
    // "https://cafe.naver.com/jaegebal"
  );

  const $ = cheerio.load(resp.data);
  //   const elements = $(".slide p");
  const elements = $("div h2");

  elements.each((idx, el) => {
    console.log($(el).text());
  });
}

main();

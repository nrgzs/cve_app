// const axios = require('axios');
// const cheerio = require('cheerio');
// const fs = require('fs');

import { fetchInitialData } from "./fetchInitialData.js";
import { getData } from "./webCrawler.js";
import apps from "../data/app_list.json" assert { type: "json" };
import { cronHelper } from "./cronHelper.js";

function startApp() {
  // for (let app of apps) {
  //   // fecth the data for older cve when new app registered
  //   fetchInitialData(app);
  // }

  // this function will be scheduged in order to get the data update
  cronHelper(getData)
}

startApp();


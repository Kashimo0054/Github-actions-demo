#!/usr/bin/env node

const { getRandomQuote } = require("./quotes");

function run() {
  const quote = getRandomQuote();
  console.log(quote);
}

run();

const { getRandomQuote, quotes } = require("../quotes");

describe("CLI Random Quote Generator", () => {
  test("returns a string", () => {
    const quote = getRandomQuote();
    expect(typeof quote).toBe("string");
  });

  test("returns a non-empty quote", () => {
    const quote = getRandomQuote();
    expect(quote.length).toBeGreaterThan(0);
  });

  test("returns one of the predefined quotes", () => {
    const quote = getRandomQuote();
    expect(quotes).toContain(quote);
  });
});

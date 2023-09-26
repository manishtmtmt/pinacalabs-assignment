const { expect } = require("chai");
const findDuplicateCharacters = require("./index");

describe("findDuplicateCharacters", () => {
  it("should return an empty array for a string with no duplicate characters", () => {
    const result = findDuplicateCharacters("abcdef");
    expect(result).to.be.an("array");
    expect(result).to.be.empty;
  });

  it("should return an array of duplicate characters in the input string", () => {
    const result = findDuplicateCharacters("hello");
    expect(result).to.be.an("array");
    expect(result).to.deep.equal(["l"]);
  });

  it("should return an array of duplicate characters with special characters and spaces in the input string", () => {
    const result = findDuplicateCharacters("Hello, World!");
    expect(result).to.be.an("array");
    expect(result).to.deep.equal(["l", "o",]);
  });
});

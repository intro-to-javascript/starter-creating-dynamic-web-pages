/** 
  EXERCISE: DOM MANIPULATION WITH JAVASCRIPT
*/

const countries = [
  {
    name: "South Korea",
    code: "KR",
    flagImageUrl: "https://www.countryflags.io/kr/flat/64.png",
    region: "Asia",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flagImageUrl: "https://www.countryflags.io/gb/flat/64.png",
    region: "Europe",
  },
  {
    name: "Japan",
    code: "JP",
    flagImageUrl: "https://www.countryflags.io/jp/flat/64.png",
    region: "Asia",
  },
  {
    name: "Italy",
    code: "IT",
    flagImageUrl: "https://www.countryflags.io/it/flat/64.png",
    region: "Europe",
  },
  {
    name: "Malaysia",
    code: "MY",
    flagImageUrl: "https://www.countryflags.io/my/flat/64.png",
    region: "Asia",
  },
  {
    name: "Germany",
    code: "DE",
    flagImageUrl: "https://www.countryflags.io/de/flat/64.png",
    region: "Europe",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    flagImageUrl: "https://www.countryflags.io/bn/flat/64.png",
    region: "Asia",
  },
  {
    name: "Greece",
    code: "GR",
    flagImageUrl: "https://www.countryflags.io/gr/flat/64.png",
    region: "Europe",
  },
  {
    name: "China",
    code: "CN",
    flagImageUrl: "https://www.countryflags.io/cn/flat/64.png",
    region: "Asia",
  },
  {
    name: "Hungary",
    code: "HU",
    flagImageUrl: "https://www.countryflags.io/hu/flat/64.png",
    region: "Europe",
  },
];

// Iterate through the array of countries. For each country,
// Use a li to display the country.
// Add an img to each country to display the flag of each country.
// Append each country to the correct part of the DOM (e.g., Germany should be added to the Europe list since it's part of Europe, whereas Japan should be added to Asia)

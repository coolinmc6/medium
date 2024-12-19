export const getOfficialUrl = (year: number, day: number) =>
  `https://adventofcode.com/${year}/day/${day}`;
export const getOfficialInputDataUrl = (year: number, day: number) =>
  `https://adventofcode.com/${year}/day/${day}/input`;
export const getRepoInputDataUrl = (year: number, day: number) =>
  `/aoc/${year}/day${day}.txt`;

export const getLinks = (year: number, day: number) => {
  return {
    officialUrl: getOfficialUrl(year, day),
    officialInputDataUrl: getOfficialInputDataUrl(year, day),
    repoInputDataUrl: getRepoInputDataUrl(year, day),
  };
};

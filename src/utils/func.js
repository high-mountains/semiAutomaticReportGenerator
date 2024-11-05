import _ from 'lodash';

export const Levenshtein = ( aCommonText, aSearchText ) => {
  const commonLength = aCommonText.length;
  const searchLength = aSearchText.length;
  let multiArray = [];
  for (let i = 0; i <= commonLength; i ++) {
    multiArray.push([]);
    multiArray[i].push( new Array(searchLength + 1) );
  }

  if (commonLength === 0) {
    return searchLength;
  }
  if (searchLength === 0) {
    return commonLength;
  }

  for (let i = 0; i <= commonLength; i ++) {
    multiArray[i][0] = i;
  }

  for (let j = 0; j <= searchLength; j ++) {
    multiArray[0][j] = j;
  }

  for (let i = 1; i <= commonLength; i ++) {
    for (let j = 1; j <= searchLength; j ++) {
      let cost;
      if (aCommonText.substring(i - 1, i) === aSearchText.substring(j - 1, j)) {
        cost = 0;
      } else {
        cost = 1;
      }
      multiArray[i][j] = Math.min(Math.min(multiArray[i - 1][j] + 1, multiArray[i][j - 1] + 1), multiArray[i - 1][j - 1] + cost);
    }
  }
  return commonLength > searchLength ? commonLength - multiArray[commonLength][searchLength] : searchLength - multiArray[commonLength][searchLength];
}
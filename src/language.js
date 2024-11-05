import _ from 'lodash';
import en from './lang/en';
export const LANG_EN = 'english';

global.language = LANG_EN;

const get = (id) => {
  let lang = {};
  switch (global.language) {
    case LANG_EN:
      lang = en;
      break;
    default:
      lang = {};
      break;
  }
  return _.get(lang, id) || id;
}

export const setLanguage = (lang) => {
  global.language = lang;
}

export default get; 
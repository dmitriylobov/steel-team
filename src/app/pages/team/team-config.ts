import {Member} from './member';

const member = {
  name: 'Антон',
  id: 'antony',
  position: 'Старший тренер',
  thumbnail: 'Мастер по реабилитациям',
  description: `Краткий текст про Тоху где рассказывается про его методологии и методики реабилитации.`,
  image: 'assets/toha-front.jpg',
  avatar: 'assets/toha-back.jpg',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const memberStretch = {
  name: 'Алина',
  id: 'alina',
  position: 'Старший тренер',
  thumbnail: 'Мастер по растяжкам',
  description: `Краткий текст про Алину где рассказывается про его методологии и методики растяжки.`,
  image: 'assets/alina-back.jpg',
  avatar: 'assets/alina-front.jpg',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const memberKovarik = {
  name: 'Игорь',
  id: 'igor',
  position: 'Старший тренер',
  thumbnail: 'Мастер по турникам',
  description: `Краткий текст про Игоря где рассказывается про его методологии и методики работы на турнике.`,
  image: 'assets/kovarik-back.jpg',
  avatar: 'assets/kovarik-front.jpg',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const memberTimur = {
  name: 'Тимур',
  id: 'timur',
  position: 'Старший тренер',
  thumbnail: 'Старший тренер',
  description: `Краткий текст про Тоху где рассказывается про его методологии и методики работы в зале`,
  image: 'assets/timur-back.jpg',
  avatar: 'assets/timur-front.jpg',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export const memberOblomova = {
  name: 'Обломова',
  id: 'oblomova',
  position: 'Старший тренер',
  thumbnail: 'Мастер по фитнесу',
  description: `Краткий текст про Игоря где рассказывается про его методологии и методики работы на турнике.`,
  image: 'assets/oblomova-back.jpg',
  avatar: 'assets/oblomova-front.jpg',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};


export const TEAM: Member[] = [member, memberStretch, memberKovarik, memberOblomova, memberTimur];

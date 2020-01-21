import {Member} from './member';

const member = {
  name: 'Антон',
  position: 'Старший тренер',
  thumbnail: 'Мастер по реабилитациям',
  description: `Краткий текст про Тоху где рассказывается про его методологии и методики реабилитации.`,
  image:'assets/toha-front.jpg',
  avatar: 'assets/toha-back.jpg'
};

const memberStretch = {
  name: 'Алина',
  position: 'Старший тренер',
  thumbnail: 'Мастер по растяжкам',
  description: `Краткий текст про Алину где рассказывается про его методологии и методики растяжки.`,
  image: 'assets/alina-back.jpg',
  avatar: 'assets/alina-front.jpg'
};

const memberKovarik = {
  name: 'Игорь',
  position: 'Старший тренер',
  thumbnail: 'Мастер по турникам',
  description: `Краткий текст про Игоря где рассказывается про его методологии и методики работы на турнике.`,
  image: 'assets/kovarik-back.jpg',
  avatar: 'assets/kovarik-front.jpg'
};

const memberTimur = {
  name: 'Тимур',
  position: 'Старший тренер',
  thumbnail: 'Старший тренер',
  description: `Краткий текст про Тоху где рассказывается про его методологии и методики работы в зале`,
  image: 'assets/timur-back.jpg',
  avatar: 'assets/timur-front.jpg'
};


export const TEAM: Member[] = [member, memberStretch, memberKovarik,memberTimur];

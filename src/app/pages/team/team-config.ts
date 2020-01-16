import {Member} from './member';

const member = {
  name: 'Антон',
  position: 'Старший тренер',
  thumbnail: 'Лукьянов Антон Сергеевич',
  description: `Our resident Scot; Andrew brings his artistic flair to the Lead Generation team, with a wealth of ground
    level marketing experience from 5 years working in the arts at the Edinburgh Fringe. Whether it’s writing poetry,
    ad copy or native articles, Andrew is our go-to for outside the box creatives.`,
  image: 'assets/toha-front.jpg',
  avatar: 'assets/toha-back.jpg'
};

const memberStretch = {
  name: 'Алина',
  position: 'Старший тренер',
  thumbnail: 'Мастер по растяжкам',
  description: `Our resident Scot; Andrew brings his artistic flair to the Lead Generation team, with a wealth of ground
    level marketing experience from 5 years working in the arts at the Edinburgh Fringe. Whether it’s writing poetry,
    ad copy or native articles, Andrew is our go-to for outside the box creatives.`,
  image: 'assets/alina-front.jpg',
  avatar: 'assets/alina-back.jpg'
};


export const TEAM: Member[] = [member, memberStretch];

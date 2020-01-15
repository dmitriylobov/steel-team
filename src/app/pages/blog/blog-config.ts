import {Blog} from './blog';
import {TAGS} from './tags';
import {DUMMY_HTML} from './dummy.html';

export const BLOG_CONFIG: Blog[] = [
  {
    id: 0,
    tag: [ TAGS.health, TAGS.fitness, TAGS.drugs],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,3],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 1,
    tag: [ TAGS.vita, TAGS.fitness, TAGS.streching],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,4],
    imageSrc: 'assets/girlsfitt.jpg'
  },
  {
    id: 2,
    tag: [ TAGS.vita, TAGS.fitness, TAGS.massage],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,4,3],
    imageSrc: 'assets/SI640_TK1_01250.jpg'
  },
  {
    id: 3,
    tag: [ TAGS.fitness, TAGS.motivation],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,5],
    imageSrc: 'assets/SI640_TK2_00235.jpg'
  },
  {
    id: 4,
    tag: [ TAGS.motivation, TAGS.fitness, TAGS.streching],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,3],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 5,
    tag: [ TAGS.massage, TAGS.fitness, TAGS.health],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 6,
    tag: [ TAGS.streching, TAGS.fitness, TAGS.motivation],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,2,4],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 7,
    tag: [ TAGS.vita, TAGS.fitness, TAGS.drugs],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 8,
    tag: [ TAGS.vita, TAGS.fitness, TAGS.drugs],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 9,
    tag: [ TAGS.drugs, TAGS.fitness, TAGS.massage],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 10,
    tag: [ TAGS.massage, TAGS.fitness, TAGS.motivation],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
];

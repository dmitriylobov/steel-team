import {Blog} from './blog';
import {TAGS} from './tags';
import {DUMMY_HTML} from './dummy.html';

export const BLOG_CONFIG: Blog[] = [
  {
    id: 0,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,3],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 1,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,4],
    imageSrc: 'assets/girlsfitt.jpg'
  },
  {
    id: 2,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,4,3],
    imageSrc: 'assets/SI640_TK1_01250.jpg'
  },
  {
    id: 3,
    tag: [ TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,5],
    imageSrc: 'assets/SI640_TK2_00235.jpg'
  },
  {
    id: 4,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,3],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 5,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 6,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [0,2,4],
    imageSrc: 'assets/crossfit-postureo.jpg'
  },
  {
    id: 7,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 8,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 9,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
  {
    id: 10,
    tag: [ TAGS.desert, TAGS.fitness, TAGS.rocks],
    date: new Date(),
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    HTML: DUMMY_HTML,
    relatedID: [1,2,0],
    imageSrc: 'assets/SI640_TK2_00271.jpg'
  },
];

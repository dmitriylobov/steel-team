import {Blog} from './blog';
import {TAGS} from './tags';
import {POST1, POST10, POST11, POST12, POST2, POST3, POST4, POST5, POST6, POST7, POST8, POST9} from './dummy.html';

export const BLOG_CONFIG: Blog[] = [
  {
    id: 0,
    tag: [TAGS.health, TAGS.fitness, TAGS.sport],
    date: new Date('Thu Jan 16 2018 16:20:11'),
    heading: 'Steel team перед походом в зал рекомендует',
    HTML: POST1,
    relatedID: [1, 2, 3],
    imageSrc: 'assets/blog/ImageBlog1.jpg'
  },
  {
    id: 1,
    tag: [TAGS.sport, TAGS.fitness, TAGS.streching],
    date: new Date('Feb 18 2018 16:20:00'),
    heading: 'Steel team перед походом в зал рекомендует (продолжение)',
    HTML: POST2,
    relatedID: [0, 2, 3],
    imageSrc: 'assets/blog/crosfblog7.jpg'
  },
  {
    id: 2,
    tag: [TAGS.vita, TAGS.fitness, TAGS.health, TAGS.drugs],
    date: new Date('APR 18 2019 16:20:00'),
    heading: 'Витамины и минералы',
    HTML: POST3,
    relatedID: [0, 1, 3],
    imageSrc: 'assets/blog/vitaminsblog3.jpg'
  },
  {
    id: 3,
    tag: [TAGS.sport, TAGS.vita, TAGS.health, TAGS.drugs],
    date: new Date('JUN 15 2019 16:20:00'),
    heading: 'Аминокислоты',
    HTML: POST4,
    relatedID: [1, 2, 4],
    imageSrc: 'assets/blog/aminoblog2.png'
  },
  {
    id: 4,
    tag: [TAGS.vita, TAGS.fitness, TAGS.sport, TAGS.health],
    date: new Date('JUL 15 2019 16:20:00'),
    heading: 'Глютамин',
    HTML: POST5,
    relatedID: [3, 5, 6],
    imageSrc: 'assets/blog/glutaminblog5.jpg'
  },
  {
    id: 5,
    tag: [TAGS.vita, TAGS.fitness, TAGS.health, TAGS.sport],
    date: new Date('AUG 15 2019 16:20:00'),
    heading: 'Вода и спорт',
    HTML: POST6,
    relatedID: [1, 2, 0],
    imageSrc: 'assets/blog/vodaisportblog6.jpg'
  },
  {
    id: 6,
    tag: [TAGS.motivation, TAGS.fitness, TAGS.sport],
    date: new Date('AUG 25 2019 16:20:00'),
    heading: '10 способов повышения продуктивности',
    HTML: POST7,
    relatedID: [0, 1, 7],
    imageSrc: 'assets/blog/productivnostblog7.jpg'
  },
  {
    id: 7,
    tag: [TAGS.vita, TAGS.fitness, TAGS.drugs],
    date: new Date('SEP 3 2019 16:20:00'),
    heading: '5 фактов о пользе рыбы для атлета',
    HTML: POST8,
    relatedID: [3, 4, 6],
    imageSrc: 'assets/blog/fishblog8.jpg'
  },
  {
    id: 8,
    tag: [TAGS.sport, TAGS.fitness, TAGS.motivation],
    date: new Date('OCT 11 2019 16:20:00'),
    heading: '5 советов как не допустить перетренированность',
    HTML: POST9,
    relatedID: [7, 9, 0],
    imageSrc: 'assets/blog/peretrenblog9.jpg'
  },
  {
    id: 9,
    tag: [TAGS.drugs, TAGS.fitness, TAGS.massage],
    date: new Date('NOV 17 2019 16:20:00'),
    heading: 'Мотивируйся',
    HTML: POST10,
    relatedID: [1, 6, 5],
    imageSrc: 'assets/blog/Motivblog10.jpg'
  },
  {
    id: 10,
    tag: [TAGS.sport, TAGS.fitness, TAGS.motivation],
    date: new Date('DEC 13 2019 16:20:00'),
    heading: 'В чем польза растяжки?',
    HTML: POST11,
    relatedID: [11, 9, 8],
    imageSrc: 'assets/blog/rastyazhkablog11.jpg'
  },
  {
    id: 11,
    tag: [TAGS.sport, TAGS.fitness, TAGS.motivation],
    date: new Date('DEC 18 2019 16:20:00'),
    heading: 'Особенности выполнения растяжки после тренировки',
    HTML: POST12,
    relatedID: [10, 9, 1],
    imageSrc: 'assets/blog/zaminkablog12.jpg'
  }
];

import {Tour} from './tour';
import {TAGS} from '../blog/tags';

export const TOURS: Partial<Tour>[] = [
  {
    operator: 'TUI',
    size: 10,
    age: {from: 18,to:65},
    length: '7 дней',
    gallery: ['assets/tour/img3.jpg', 'assets/tour/img19.jpg', 'assets/tour/img1.jpg', 'assets/tour/img2.jpg',
      'assets/tour/img0.jpg', 'assets/tour/img5.jpg', 'assets/tour/img17.jpg', 'assets/tour/img6.jpg', 'assets/tour/img18.jpg',
      'assets/tour/img7.jpg', 'assets/tour/img12.jpg', 'assets/tour/img13.jpg', 'assets/tour/img14.jpg', 'assets/tour/img15.jpg',
      'assets/tour/img16.jpg',],
    lables: ['Америка', 'Бразилия', 'Фитнесс-тур'],
    tags: [TAGS.sport, TAGS.fitness],
    places: [
      {name: 'Agra', image: 'assets/girlsfitt.jpg'},
      {name: 'Guineya', image: 'assets/girlsfitt.jpg'},
      {name: 'Akreminos', image: 'assets/girlsfitt.jpg'},
    ],
    mapPlace: [
      {lat: 45.730150, lon: 34.225271},
      {lat: 46.230150, lon: 35.225271},
    ],
    itinerary: [{
      icon: 'info',
      className: 'info',
      heading: 'День 1',
      description: `Прилет<br/>
      Заселение, далее завтрак/обед/ужин в зависимости от времени прилета.<br/>
      Полноценное знакомство с группой.<br/>
      Ввод в курс дела (Выбираем группой график проведения лекций и практики)<br/>
      Лекция 1 (Питание)<br/>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'День 2',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 2 (Тренировки)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия) <br/>
      Обед (отдых/\тренировка/\кардио)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Выезд (город/\клуб/\прогулка)<br/>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'День 3',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 3 (Анатомия)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия)<br/> 
      Обед (отдых/\тренировка)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Выезд (город/\клуб/\прогулка)<br/>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'День 4',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 4 (Женский день)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия)<br/>
      Обед (отдых/\тренировка/\кардио)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Выезд (город/\клуб/\прогулка)<br/>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'День 5',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 5 (Биомеханика и нейромышечная связь)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия)<br/>
      Обед (отдых\тренировка/\кардио)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Выезд (город/\клуб/\прогулка)<br/>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'День 6',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 6 (Мотивация и Цели)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия)<br/> 
      Обед (отдых/\тренировка/\кардио)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Выезд (город/\клуб/\прогулка)<br/>`
    }, {
      icon: 'assistant_photo',
      className: 'end',
      heading: 'День 7',
      description: `Завтрак (Час отдыха)<br/>
      Лекция 7 (Экзамен тест)<br/>
      (Свободный график)<br/>
      (Водное поло, волейбол, теннис, экскурсии, фотосессия)<br/> 
      Обед (отдых/\тренировка/\кардио)<br/>
      Практика (тренажерный зал/\стретчинг)<br/>
      Ужин<br/>
      Поездка домой.<br/>`
    }],
    includedItems: [
      {
        heading: 'Питание', description: 'Питание все включено предоставляет отель', icon: 'check'
      },
      {
        heading: 'Лекции', description: 'Семидневный курс обучения', icon: 'check'
      },
      {
        heading: 'Практика',
        description: 'Бесплатная фотосессия всем участникам тура на территории отеля, так же короткометражный фильм, на память каждому участнику тура',
        icon: 'check'
      },
      {
        heading: 'Развлечения с тренерами',
        description: 'Групповые программы, совместные тренировки, водное поло, теннис, аква аэробика, совместные экскурсии, стретчинг, волейбол, совместные походы в клуб, выезд в город.',
        icon: 'check'
      },
      {
        heading: 'График работы тренеров',
        description: 'Тренера каждый день находятся на территории отеля, с рабочим графиком',
        icon: 'check'
      },
      {
        heading: 'Консультации по завершению тура',
        description: 'Онлайн консультации для участников по завершению фитнес тура, в течение двух недель, от тренеров – бесплатно!',
        icon: 'check'
      }
    ],
    placeToStay: 'Отель El-Haze 5 звёзд',
    name: 'Тур в Рио-де-Женейро',
    start: new Date(),
    end: new Date(),
    fullPrice: 200,
    discount: 10,
    id: 60134,
    reviews: [{
      date: new Date(),
      name: 'Святослав',
      rating: [null,null,null,null,null],
      text: `Стартовали мы с Киева, перелет был быстрым и комфортным.
      Прилетели мы после обеда, в самую жару, далее нас ждало заселение, и полноценное знакомство с группой. Все прошло удачно, ребята все с чувством юмора, любознательные.
      Далее нас ввели в курс дела, так сказать подготовили людей к плодотворной неделе, были обсуждены организационные вопросы, был скорректирован недельный график, что бы всех устраивало время провождения лекций с практикой. Много писать не буду, все равно всего словами не передать. Организация 5+ Отдельное спасибо оператору за уйму крутых фоток.`
    },{
      date: new Date(),
      name: 'Валентина',
      rating: [null,null,null,null,null],
      text: `С недавних пор стало грустно нам с мужем смотреть на себя в зеркало. И возраст не детский и работа загоняет. Серьезно решили спортом заняться. К залам тренерам стали присматриваться. Решили - едем отдыхать, All inclusive по полной и дома сразу в зал. Но увидели фитнес тур. Муж человек серьезный и вдумчивый, предложил попробовать поехать и понять стоит ли потом на зал и тренеров не малые деньги тратить. Вдруг спорт и мы вещи не совместимые? Изучил он все придирчиво, тур купил за смешные деньги. Ожидали подвох. Заранее уговаривали себя не расстраиваться. Но - мы в восторге. Теория полезная, особенно для нас, любителей хорошо покушать. Занятия рассчитаны индивидуально совершенно, мы супер спортсмены справлялись и даже начали ловить от этого кайф. Тренера очень контактные и весёлые, с юмором. Заражают своим интузиазмом. А их тела и формы - это нечто завораживающее! Понятно что нам таких форм не видать, но развалинами мы теперь точно не будем. Ребята, мы с вами! - куда и когда едем в этот раз? Нас не забудьте, мы будем очень стараться!`
    },{
      date: new Date(),
      name: 'Лидия',
      rating: [null,null,null,null,null],
      text: `Я мама двух детей, мне 46 лет, мужу 40, на фитнес туре были впервые.
      ведем здоровый образ жизни, сама хожу в зал - опыт пол года, наблюдаю очень печальную карину... 
      Тренера которых набирают на работу в зал, далеко не все квалифицированные специалисты с соответствующим образованием, да и что говорить о посещении врачей перед походом в зал, 
      если еще попасть к нелепому тренеру, пару мес и все пропало.
      Я платила за тренировку 380 гривен ходила 3 раза в неделю, занималась с тренером два месяца, потом решила уйти, прогресс стал, должной мотивации я не получала, да и скучно было. 
      Услышала о фитнес туре, попала на этих ребят через тренера своей подруги) 
      Вообщем о поездке в целом, ребята ненавязчиво открыли глаза на все по новому, ребятки выступающие действующие чемпионы, было все очень интересно, а самое главное организованно, Нужно ехать и пробовать) Ставлю твердую пятерку`
    }],
  }
];

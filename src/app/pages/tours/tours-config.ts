import {Tour} from './tour';
import {TAGS} from '../blog/tags';

export const TOURS: Partial<Tour>[] = [
  {
    gallery: ['assets/girlsfitt.jpg', 'assets/fit-main.png', 'assets/retro.jpg', 'assets/main.png', 'assets/sea-main.png'],
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
      heading: 'Выезд',
      description: `Discover the best of India on a flexible 3-day tour to Jaipur, Agra, and Delhi, also known as the Golden
      Triangle. Let a dedicated guide show you the highlights of each city such as the Taj Mahal, Amber Fort, Palace
      of the Winds, and Qutub Minar.`
    }, {
      icon: 'where_to_vote',
      className: 'vote',
      heading: 'Arrive in Delhi - Agra ( 210 km 3 hrs Drive)',
      description: `Discover the best of India on a flexible 3-day tour to Jaipur, Agra, and Delhi, also known as the Golden
      Triangle. Let a dedicated guide show you the highlights of each city such as the Taj Mahal, Amber Fort, Palace
      of the Winds, and Qutub Minar.`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'Day 02 Agra - Jaipur ( 224 km 4 hrs Drive )',
      description: `<p>Start your Guiding tour of Taj Mahal city Agra. Early morning sunrise tour of Taj Mahal is best time to
          visit
          Taj Mahal. Morning around 5:30 (Summer) time 6:15 (winter) driver and guide pickup you from hotel and
          transfer
          you Taj Mahal.</p>
        <p>
          <strong>Taj Mahal</strong> - The Taj Mahal is an ivory-white marble mausoleum on the south bank of the
          Yamuna
          river in the
          Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his
          favorite wife, Mumtaz Mahal After Taj Mahal tour back to the hotel for breakfast and visit Agra fort.
        </p>

        <p>
          <strong>Agra Fort</strong>:- Agra Fort is the former imperial residence of the Mughal Dynasty located in
          Agra, India. It is
          also a UNESCO World Heritage site. After lunch depart from Agra to Jaipur around 4 hrs drive on the way
          visit
          Capital City Fatehpur Sikri.
        </p>

        <p>
          <strong>Fatehpur Sikri</strong>:- Fatehpur Sikri is a city in the Agra District of Uttar Pradesh, India.
          Previously the city's
          name was Vijaypur Sikari, of the Sikarwar Rajput clan; the later city was founded in 1569 by the Emperor on
          the way Also you can visit The Chand Baori is a stepwell built over a thousand years ago in the Abhaneri
          village of Rajasthan.It is one of the largest stepwells in the world. Evening check in Jaipur Hotel.
          overnight
          rest in Jaipur hotel.
        </p>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: 'Day 03 Agra - Jaipur ( 224 km 4 hrs Drive )',
      description: `<p>Start your Guiding tour of Taj Mahal city Agra. Early morning sunrise tour of Taj Mahal is best time to
          visit
          Taj Mahal. Morning around 5:30 (Summer) time 6:15 (winter) driver and guide pickup you from hotel and
          transfer
          you Taj Mahal.</p>
        <p>
          <strong>Taj Mahal</strong> - The Taj Mahal is an ivory-white marble mausoleum on the south bank of the
          Yamuna
          river in the
          Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his
          favorite wife, Mumtaz Mahal After Taj Mahal tour back to the hotel for breakfast and visit Agra fort.
        </p>

        <p>
          <strong>Agra Fort</strong>:- Agra Fort is the former imperial residence of the Mughal Dynasty located in
          Agra, India. It is
          also a UNESCO World Heritage site. After lunch depart from Agra to Jaipur around 4 hrs drive on the way
          visit
          Capital City Fatehpur Sikri.
        </p>

        <p>
          <strong>Fatehpur Sikri</strong>:- Fatehpur Sikri is a city in the Agra District of Uttar Pradesh, India.
          Previously the city's
          name was Vijaypur Sikari, of the Sikarwar Rajput clan; the later city was founded in 1569 by the Emperor on
          the way Also you can visit The Chand Baori is a stepwell built over a thousand years ago in the Abhaneri
          village of Rajasthan.It is one of the largest stepwells in the world. Evening check in Jaipur Hotel.
          overnight
          rest in Jaipur hotel.
        </p>`
    }, {
      icon: 'trip_origin',
      className: 'adjust',
      heading: ' Day 04 Kirgikova Gora - Tokyo ( 224 km 4 hrs Drive )',
      description: `<p>Start your Guiding tour of Taj Mahal city Agra. Early morning sunrise tour of Taj Mahal is best time to
          visit
          Taj Mahal. Morning around 5:30 (Summer) time 6:15 (winter) driver and guide pickup you from hotel and
          transfer
          you Taj Mahal.</p>
        <p>
          <strong>Taj Mahal</strong> - The Taj Mahal is an ivory-white marble mausoleum on the south bank of the
          Yamuna
          river in the
          Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his
          favorite wife, Mumtaz Mahal After Taj Mahal tour back to the hotel for breakfast and visit Agra fort.
        </p>

        <p>
          <strong>Agra Fort</strong>:- Agra Fort is the former imperial residence of the Mughal Dynasty located in
          Agra, India. It is
          also a UNESCO World Heritage site. After lunch depart from Agra to Jaipur around 4 hrs drive on the way
          visit
          Capital City Fatehpur Sikri.
        </p>

        <p>
          <strong>Fatehpur Sikri</strong>:- Fatehpur Sikri is a city in the Agra District of Uttar Pradesh, India.
          Previously the city's
          name was Vijaypur Sikari, of the Sikarwar Rajput clan; the later city was founded in 1569 by the Emperor on
          the way Also you can visit The Chand Baori is a stepwell built over a thousand years ago in the Abhaneri
          village of Rajasthan.It is one of the largest stepwells in the world. Evening check in Jaipur Hotel.
          overnight
          rest in Jaipur hotel.
        </p>`
    }, {
      icon: 'assistant_photo',
      className: 'end',
      heading: 'Jaipur - Delhi (Transfer) ( 5 Hours)',
      description: `<p>Start your Guiding tour of Taj Mahal city Agra. Early morning sunrise tour of Taj Mahal is best time to
          visit
          Taj Mahal. Morning around 5:30 (Summer) time 6:15 (winter) driver and guide pickup you from hotel and
          transfer
          you Taj Mahal.</p>
        <p>
          <strong>Taj Mahal</strong> - The Taj Mahal is an ivory-white marble mausoleum on the south bank of the
          Yamuna
          river in the
          Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his
          favorite wife, Mumtaz Mahal After Taj Mahal tour back to the hotel for breakfast and visit Agra fort.
        </p>

        <p>
          <strong>Agra Fort</strong>:- Agra Fort is the former imperial residence of the Mughal Dynasty located in
          Agra, India. It is
          also a UNESCO World Heritage site. After lunch depart from Agra to Jaipur around 4 hrs drive on the way
          visit
          Capital City Fatehpur Sikri.
        </p>

        <p>
          <strong>Fatehpur Sikri</strong>:- Fatehpur Sikri is a city in the Agra District of Uttar Pradesh, India.
          Previously the city's
          name was Vijaypur Sikari, of the Sikarwar Rajput clan; the later city was founded in 1569 by the Emperor on
          the way Also you can visit The Chand Baori is a stepwell built over a thousand years ago in the Abhaneri
          village of Rajasthan.It is one of the largest stepwells in the world. Evening check in Jaipur Hotel.
          overnight
          rest in Jaipur hotel.
        </p>`
    }],
    name: 'Тур в Рио-де-Женейро',
    start: new Date(),
    end: new Date(),
    fullPrice: 4200,
    discount: 420,
    id: 0,
  }
];

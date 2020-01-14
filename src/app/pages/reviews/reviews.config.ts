import {Review} from './review.interface';

const RESPONSE = {
  date: new Date(),
  author: 'Steel team manager',
  comment: 'Hi Traveler, Thank you for taking time to share your review with us. We\'re happy to hear the stay ' +
  'was great and appreciate you recognizing the great service provided by our staff. We hope to see you soon, Steel tean!',

};

const APPRAISAL: Review = {
  date: new Date(),
  author: 'A verified traveler',
  comment: 'Extremely clean and nice place to stay in Page. Friendly staff. Good value for money.',
  response: RESPONSE,
  mark: 4.5
};

export const APPRAISAL_LIST = [APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL, APPRAISAL];

import {TOURS} from './tours-config';

export class ToursService {
  getTourById(id: number) {
    return TOURS.find(tour => tour.id === id);
  }
}

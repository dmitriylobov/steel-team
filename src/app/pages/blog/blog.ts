import { TAGS } from './tags';

export interface Blog {
  id: number;
  tag: TAGS[];
  date: Date;
  heading: string;
  HTML: string;
  relatedID: number[];
  imageSrc: string;
}

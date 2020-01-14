export interface Review {
  date: Date;
  author: string;
  comment: string;
  response?: Review;
  mark?: number;
}

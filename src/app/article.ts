import { Pixel } from './pixel';
import { User } from './user';

export class Article {
  Id: number;
  Title: string;
  Url: string;
  UserId: number;
  User: User;
  Pixel: Pixel;
}

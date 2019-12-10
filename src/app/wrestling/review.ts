export class Review {
  id: number;
  name: string;
  date: number;
  driveLink: string;
  img: string;
  type: string; //Type de review, peut être une fed ou une zone géographique
  //ex : Jap, PWG, UK, WWE, WWE NXT, WWE 205 Live, PROGRESS...
  types: Array<string>;
}
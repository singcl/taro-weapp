declare interface HttpStandardResponse<T> {
  code: number;
  msg: string;
  data?: T;
}

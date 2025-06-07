export interface ServerResponse<T> {
  status: number;
  data: T;
  message: string;
  messageCode: string;
}

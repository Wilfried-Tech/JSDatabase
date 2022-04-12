import { ERROR } from './enums'

export interface IError {
  type: ERROR;
  message: string;
}
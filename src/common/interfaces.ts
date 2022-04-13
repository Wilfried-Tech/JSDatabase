import { ERROR } from './enums'

export interface IError {
  type: ERROR;
  message: string;
}

export interface IDatabase {
  name: string;
  tables: string;
  version: number;
}

export interface ISelect {
  distinct ? : boolean;
  columns: Array < string > | string;
  from: string | Array < string > | IJoinClause;
  where ? : IWhereClause;
  orderBy ? : IOrderClause;
  groupBy ? : string;
  having ? : IWhereClause;
}

export interface IDelete {
  from: string;
  where: IWhereClause;
}

export interface IUpdate {
  table: string;
  set: {
    [key: string]: any
  };
  where ? : IWhereClause;
}

export interface IInsert {
  into: string;
  columns ? : string | Array < string > ;
  values: string | Array < string >
}

export interface
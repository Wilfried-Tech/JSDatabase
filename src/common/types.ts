export type QueryResult = {
  result ? : any
  error ? : any
}

export type QueryRequest = {
  name: string
  query: any
  onResult?: (result?) => void
  onError?: (err?) => void
}



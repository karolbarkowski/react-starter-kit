import errorCodes from './error-codes'

const ErrorCodeMessages = new Map<string, string>([[errorCodes.FETCH, 'Unknown error while fetching data from server']])

export const getMessage = (errorCode: string): string => {
  let message = ErrorCodeMessages.get(errorCode)

  return message ? message : 'Unknown error occured'
}

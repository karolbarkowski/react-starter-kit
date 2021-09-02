const ErrorCodeMessages = new Map<string, string>([['FETCH', 'Unknown error while fetching data from server']])

export const GetMessage = (errorCode: string): string => {
  let message = ErrorCodeMessages.get(errorCode)

  return message ? message : 'Unknown error occured'
}

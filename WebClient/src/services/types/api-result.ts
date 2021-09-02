export class ApiResult<T> {
  isSuccess: boolean
  data?: T
  errorCode: string

  constructor(isSuccess: boolean, data?: T, errorCode: string = '') {
    this.isSuccess = isSuccess
    this.data = data
    this.errorCode = errorCode
  }
}

export class ApiResultError<T> extends ApiResult<T> {
  constructor(errorCode: string) {
    super(false, undefined, errorCode)
  }
}

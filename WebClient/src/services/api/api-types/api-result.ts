export class ApiResult<T> {
  isSuccess: boolean
  value?: T
  errorCode: string

  constructor(isSuccess: boolean, value?: T, errorCode: string = '') {
    this.isSuccess = isSuccess
    this.value = value
    this.errorCode = errorCode
  }
}

export class ApiResultError<T> extends ApiResult<T> {
  constructor(errorCode: string) {
    super(false, undefined, errorCode)
  }
}

namespace Api.Results
{
    public class FailedResult<T> : IResult<T>
    {
        public T Value { get; set; }

        public string ErrorCode { get; set; }

        public bool IsSuccess => false;

        public FailedResult(string errorCode)
        {
            ErrorCode = errorCode;
        }
    }
}

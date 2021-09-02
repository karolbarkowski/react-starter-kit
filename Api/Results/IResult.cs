namespace Api.Results
{
    public interface IResult<T>
    {
        public T Value { get; set; }

        public string ErrorCode { get; set; }

        public bool IsSuccess { get; }
    }
}

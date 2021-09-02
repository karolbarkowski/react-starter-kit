﻿namespace Api.Results
{
    public class SuccessfulResult<T> : IResult<T>
    {
        public T Value { get; set; }

        public string ErrorCode { get; set; }

        public bool IsSuccess => true;

        public SuccessfulResult(T value)
        {
            Value = value;
        }
    }
}

import React from "react";

export const Loading = () => {
  return <div className='loading'>loading</div>;
};

export const ErrorMessage = ({message}) => {
  return <div className={'error-message'}>{message}</div>;
};
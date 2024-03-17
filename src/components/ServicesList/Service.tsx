import React from 'react';

type Props = {
  title: string;
  body: string;
}

const Service: React.FC<Props> = ({title, body}:Props) => {
  return (
    <div >
  
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export {Service}
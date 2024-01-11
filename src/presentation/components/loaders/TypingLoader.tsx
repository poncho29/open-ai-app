import { FC, HTMLAttributes } from 'react';

import './TypingLoader.css';

type DivType = HTMLAttributes<HTMLDivElement>;

export const TypingLoader: FC<DivType> = (props) => {
  return (
    <div className={`typing ${props.className}`}>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
      <span className="circle scaling"></span>
    </div>
  )
}

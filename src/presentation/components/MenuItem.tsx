import { NavLink } from "react-router-dom";

import { MenuItem as IMenuItem } from "../../interfaces";

interface Props {
  option: IMenuItem;
}

export const MenuItem = ({ option }: Props) => {
  return (
    <NavLink
      key={option.to}
      to={option.to}
      className={({ isActive }) => 
        isActive
          ? 'flex items-center justify-center p-2 rounded-md bg-gray-800 transition-colors'
          : 'flex items-center justify-center p-2 rounded-md transition-colors hover:bg-gray-800'
      }
    >
      <i className={`${option.icon} text-exl text-indigo-400 mr-4`}></i>
      <div className='flex flex-col flex-grow'>
        <span className='text-lg text-white font-semibold'>
          {option.title}
        </span>
        <span className='text-sm text-gray-400'>
          {option.description}
        </span>
      </div>
    </NavLink>
  )
}

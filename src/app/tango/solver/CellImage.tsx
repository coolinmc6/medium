import { FaSun, FaMoon } from 'react-icons/fa';
import { CellValue } from '../types';

export const CellImage = ({ value }: { value: CellValue }) => {
  if (value === 'S') {
    return <FaSun className="text-yellow-500" size={20} />;
  } else if (value === 'M') {
    return <FaMoon className="text-blue-500" size={20} />;
  }
  return null;
};

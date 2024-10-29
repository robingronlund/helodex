import { types } from '../data/color-types';

export const getColorByTypeName = (typeName: string): string => {
  const type = types.find(
    (t) => t.name.toLowerCase() === typeName.toLowerCase()
  );
  return type ? type.color : '#000000';
};

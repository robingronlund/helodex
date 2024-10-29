import { Type } from 'pokenode-ts';
import { getColorByTypeName } from '../../../utils/get-color-type';

interface WeaknessProps {
  weaknesses: Type[];
}

export const Weakness = ({ weaknesses }: WeaknessProps) => {
  return (
    <div>
      <h4>Weakness</h4>
      <div className='flex flex-row flex-wrap gap-4'>
        {!weaknesses ? (
          <div>No Weakness found</div>
        ) : (
          weaknesses.map((weakness) =>
            weakness?.damage_relations?.double_damage_from?.map(
              ({ name }, index) => (
                <div
                  key={`${name}-${index}`}
                  className='badge text-white'
                  style={{
                    backgroundColor: getColorByTypeName(name),
                    borderColor: getColorByTypeName(name),
                  }}
                >
                  {name}
                </div>
              )
            )
          )
        )}
      </div>
    </div>
  );
};

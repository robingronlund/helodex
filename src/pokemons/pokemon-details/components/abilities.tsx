import { PokemonAbility } from 'pokenode-ts';

interface AbilitiesProps {
  abilities: PokemonAbility[];
}

export const Abilities = ({ abilities }: AbilitiesProps) => {
  return (
    <div>
      <h4>Abilities</h4>
      {abilities.map((ability) => (
        <p key={ability.slot}>
          {ability.is_hidden ? null : ability.ability.name}
        </p>
      ))}
    </div>
  );
};

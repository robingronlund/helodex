import { PokemonStat } from 'pokenode-ts';

interface StatsProps {
  stats: PokemonStat[];
}

export const Stats = ({ stats }: StatsProps) => {
  return (
    <>
      <article className='prose'>
        <h3>Stats</h3>
      </article>
      <div className='grid grid-cols-3 gap-4'>
        {stats.map(({ stat, base_stat }, index) => (
          <div key={`${stat}-${index}`} className='stats shadow'>
            <div className='stat'>
              <div className='stat-title'>{stat.name}</div>
              <div className='stat-value text-accent'>{base_stat}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

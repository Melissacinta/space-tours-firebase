import useGlobalContext from '../context';

const Crew = () => {
  const { crew, destinations, technology } = useGlobalContext();
  console.log('CREW', crew);
  console.log('DS', destinations);
  console.log('TECH', technology);

  return (
    <div className='crew'>
      {crew?.length &&
        crew.map((member) => {
          return (
            <article key={member.id}>
              <h3 className="uppercase text-accent ls-2">{member.name}</h3>
              <img src={member?.images?.webp} alt="" />
            </article>
          );
        })}
    </div>
  );
};

export default Crew;

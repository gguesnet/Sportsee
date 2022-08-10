function Title({ name }) {
  return (
    <div>
      <h1>
        Bonjour <span className="red">{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
    </div>
  );
}

export default Title;

const Button = ({ mangas, offset, setOffset }) => {
  const handlePages = () => {
    let buttons = [];
    for (let i = 1; i < Math.floor((mangas.data.total + 1) / 12); i++) {
      buttons.push(
        <button onClick={() => setOffset(12 * i)} key={i}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return <pre>{mangas && <div>{handlePages()}</div>}</pre>;
};

export default Button;

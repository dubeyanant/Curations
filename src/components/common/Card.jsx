const Card = ({ url, name, urlImg }) => {
  return (
    <a
      href={url}
      className="w-52 h-52 drop-shadow-md rounded-lg overflow-hidden relative"
    >
      <img
        src={urlImg}
        alt={name}
        className="bg-cover bg-center rounded-lg w-52 h-52"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-grays-transparent from-50% to-grays-black rounded-lg"></div>
      <p className="absolute bottom-0 left-0 text-lg ml-5 mb-3 text-grays-white">
        {name}
      </p>
    </a>
  );
};

export default Card;

import Card from "./common/Card";
import websitesJson from "../assets/websites.json";

const Websites = () => {
  return (
    <>
      <p className="text-lg">
        These are some cool websites that I like. This presents several fun and
        useful sites which you might want to check out.
      </p>
      <div className="mt-12 grid grid-cols-3 gap-5">
        {websitesJson.map((website, index) => (
          <Card
            key={index}
            url={website.url}
            name={website.name}
            urlImg={website.urlImg}
          />
        ))}
      </div>
    </>
  );
};

export default Websites;

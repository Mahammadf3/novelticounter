import { useValue } from "../contex";

const Home = () => {
  const {words}= useValue();
  return (
    <div>
      {words.map((eachItem, i) => (
        <p key={i}>{eachItem}</p>
      ))}
      <p>hi</p>
    </div>
  );
};

export default Home;

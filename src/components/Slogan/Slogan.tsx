import "./Slogan.css";

interface Slogan {
  slogan: string;
}

export const Slogan = ({ slogan }: Slogan) => {
  return (
    <div className="slogan">
      <p>{slogan}</p>
    </div>
  );
};

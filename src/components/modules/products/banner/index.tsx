import Styles from "./Banner.module.css";

const CommonBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div
      className={`${Styles.banner} mt-5 border-2 border-white rounded-3xl flex justify-center items-center`}
    >
      <div className="text-center">
        <h1 className="font-bold text-xl md:text-2xl leading-10 ">{title}</h1>
        <p>{path}</p>
      </div>
    </div>
  );
};

export default CommonBanner;

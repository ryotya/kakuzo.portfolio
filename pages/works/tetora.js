import Image from "next/image";
import Tetora from "../../public/images/tetora-work-top.webp";
import styles from "../../styles/MyComponent.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const tetora = () => {
  return (
    <div className="mx-auto w-5/6 sp:w-3/4 lap:w-7/12" id="tetora">
      <div className="mt-24">
        <div className="flex items-center hover:opacity-60 duration-300">
          <a href="https://www.tetora.io/" target="_blank" rel="noreferrer">
            リモートワークサービス「TETORA」のサービスサイト
          </a>
          <OpenInNewIcon className="text-base ml-1" />
        </div>
        <div className="mt-4">
          <Image
            alt=""
            src={Tetora}
            width={900}
            height={500}
            className={styles.image}
          />
        </div>
        <div className="mt-8">
          <p className="font-light tracking-wide">
            Nuxt.JS / Vue.js / HTML,CSS / tailwindCSS / Adobe XD
          </p>
          <p className="mt-6 text-base leading-relaxed break-words font-light">
            リモートワークサービス「TETORA」のサービスサイトを2名で実装。AdobeXDでデザインを作成し、Nuxt.JS上にtailwindCSSを利用してスタイリングし、animationはすべてcssのみで実装。
          </p>
        </div>
      </div>
    </div>
  );
};

export default tetora;

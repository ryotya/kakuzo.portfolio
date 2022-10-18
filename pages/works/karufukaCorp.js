import Image from "next/image";
import KarufukaTop from "../../public/images/karufuka-work-top.webp";
import styles from "../../styles/MyComponent.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const karufukaCorp = () => {
  return (
    <div className="mx-auto w-5/6 sp:w-3/4 lap:w-7/12" id="karufuka">
      <div className="mt-24">
        <div className="flex items-center hover:opacity-60 duration-300">
          <a
            href="https://www.karufuka.co.jp/"
            target="_blank"
            rel="noreferrer"
          >
            karufuka株式会社のコーポレートサイト
          </a>
          <OpenInNewIcon className="text-base ml-1" />
        </div>
        <div className="mt-4">
          <Image
            alt=""
            src={KarufukaTop}
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
            karufuka株式会社のコーポレートサイトを2名で実装。AdobeXDでデザインを作成し、Nuxt.JS上にtailwindCSSを利用してスタイリングし、動的部分に関してはVue.jsで実装。
          </p>
        </div>
      </div>
    </div>
  );
};

export default karufukaCorp;

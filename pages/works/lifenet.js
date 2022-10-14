import Image from "next/image";
import LifeNetTop from "../../public/images/lifenet-work-top.png";
import styles from "../../styles/MyComponent.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const lifeNet = () => {
  return (
    <div className="mx-auto w-7/12">
      <div className="mt-24">
        <div className="flex items-center hover:opacity-60 duration-300">
          <a
            href="https://www.lifenet-seimei.co.jp/"
            target="_blank"
            rel="noreferrer"
          >
            ライフネット生命の商品ページ
          </a>
          <OpenInNewIcon className="text-base ml-1" />
        </div>
        <div className="mt-4">
          <Image
            alt=""
            src={LifeNetTop}
            width={900}
            height={500}
            className={styles.image}
          />
        </div>
        <div className="mt-8">
          <p className="font-light tracking-wide">
            Next.js / React / HTML,CSS / tailwindCSS / Emotion / Storybook /
            Adobe XD
          </p>
          <p className="mt-6 text-base leading-relaxed break-words font-light">
            ライフネット生命の商品ページを10人以上のチームで実装。Next.js上にで作られた商品ページをアトミックデザインで、コンポーネントごとに切り分けスタイリング。Emotionを使用し、コンポーネントの確認にはStorybookを採用。
          </p>
        </div>
      </div>
    </div>
  );
};

export default lifeNet;

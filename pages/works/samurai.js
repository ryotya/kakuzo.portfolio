import Image from "next/image";
import Samurai from "../../public/images/samurai-work-top.webp";
import styles from "../../styles/MyComponent.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const samurai = () => {
  return (
    <div className="mx-auto w-5/6 sp:w-3/4 lap:w-7/12" id="samurai">
      <div className="mt-24">
        <div className="flex items-center hover:opacity-60 duration-300">
          <a
            href="https://www.sejuku.net/corp/"
            target="_blank"
            rel="noreferrer"
          >
            エンジニアスクール
          </a>
          <OpenInNewIcon className="text-base ml-1" />
        </div>
        <div className="mt-4">
          <Image
            alt=""
            src={Samurai}
            width={900}
            height={500}
            className={styles.image}
          />
        </div>
        <div className="mt-8">
          <p className="font-light tracking-wide">Bizdev / Sales</p>
          <p className="mt-6 text-base leading-relaxed break-words font-light">
            新規サービスのビジネス開発、エンジニアスクール受講生獲得セールス。
          </p>
        </div>
      </div>
    </div>
  );
};

export default samurai;

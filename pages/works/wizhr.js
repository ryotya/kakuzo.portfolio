import Image from "next/image";
import Wizhr from "../../public/images/wizhr-work-top.png";
import styles from "../../styles/MyComponent.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const wizhr = () => {
  return (
    <div className="mx-auto w-5/6 sp:w-3/4 lap:w-7/12" id="wizhr">
      <div className="mt-24">
        <div className="flex items-center hover:opacity-60 duration-300">
          <a href="" target="_blank" rel="noreferrer">
            HR techサービス
          </a>
        </div>
        <div className="mt-4">
          <Image
            alt=""
            src={Wizhr}
            width={900}
            height={500}
            className={styles.image}
          />
        </div>
        <div className="mt-8">
          <p className="font-light tracking-wide">Bizdev / Sales / Marketing</p>
          <p className="mt-6 text-base leading-relaxed break-words font-light">
            HR techサービスを4人で運営。HR
            tech求職者管理サービスのビジネス開発から拡販までを担当し、上場企業にM&AでEXIT。
          </p>
        </div>
      </div>
    </div>
  );
};

export default wizhr;

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/MyComponent.module.css";
import LifeNet from "../../public/images/lifenet-work.png";
import KaruFuka from "../../public/images/karufuka-work.png";
import Tetora from "../../public/images/tetora-work.png";
import Autoku from "../../public/images/autoku-work.png";
import Wizhr from "../../public/images/wizhr-work.png";
import Samurai from "../../public/images/samurai-work.png";

const works = () => {
  return (
    <div id="works">
      <div className="flex justify-center">
        <h2 className="text-4xl tab:text-5xl font-thin tracking-wider">
          Works
        </h2>
      </div>
      <div className="grid grid-cols-1 sp:grid-cols-2 lap:grid-cols-8 gap-8 lap:gap-12 mt-12 tab:mt-20 mx-12 tab:mx-24 spc:mx-32 lap:mx-0">
        {/* 1-line */}
        <div className="lap:col-start-2 lap:col-span-2">
          <Link href="/works#lifenet">
            <a>
              <Image
                src={LifeNet}
                width={500}
                height={500}
                alt=""
                className={styles.image}
              />
            </a>
          </Link>
          <div className="text-center mt-2">
            <p className="font-medium">ライフネット生命</p>
          </div>
        </div>
        <div className="lap:col-span-2">
          <div>
            <Link href="/works#karufuka">
              <a>
                <Image
                  src={KaruFuka}
                  width={500}
                  height={500}
                  alt=""
                  className={styles.image}
                />
              </a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">karufuka(株)コーポレートサイト</p>
          </div>
        </div>
        <div className="lap:col-span-2">
          <div>
            <Link href="/works#tetora">
              <a>
                <Image
                  src={Tetora}
                  width={500}
                  height={500}
                  alt=""
                  className={styles.image}
                />
              </a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">
              リモートワークサービス<br></br>「TETRA」のサービスサイト
            </p>
          </div>
        </div>

        {/* 2-line */}
        <div className="lap:col-start-2 lap:col-span-2">
          <div>
            <Link href="/works#autoku">
              <a>
                <Image
                  src={Autoku}
                  width={500}
                  height={500}
                  alt=""
                  className={styles.image}
                />
              </a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">HR techサービス</p>
          </div>
        </div>
        <div className="lap:col-span-2">
          <div>
            <Link href="/works#wizhr">
              <a>
                <Image
                  src={Wizhr}
                  width={500}
                  height={500}
                  alt=""
                  className={styles.image}
                />
              </a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">HR techサービス</p>
          </div>
        </div>
        <div className="lap:col-span-2">
          <div>
            <Link href="/works#samurai">
              <a>
                <Image
                  src={Samurai}
                  width={500}
                  height={500}
                  alt=""
                  className={styles.image}
                />
              </a>
            </Link>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">エンジニアスクール</p>
          </div>
        </div>

        {/* 3-line */}
        {/* <div className="col-start-2 col-span-2">
          <div>
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a>
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a>
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a>
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div> */}
        <div className="lap:col-start-4 lap:col-span-2 text-center">
          <p className="ml-8 text-xl font-light">and more...</p>
        </div>
      </div>
    </div>
  );
};

export default works;

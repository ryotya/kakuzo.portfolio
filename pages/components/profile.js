import Image from "next/image";
import MySelf from "../../public/images/myself.jpeg";
import styles from "../../styles/MyComponent.module.css";

const profile = () => {
  return (
    <div id="profile">
      <div className="flex justify-center">
        <h2 className="text-4xl tab:text-5xl font-thin tracking-wider">
          Profile
        </h2>
      </div>
      <div className="grid grid-cols-1 spc:grid-cols-6 spc:gap-16 lap:gap-0 mt-12 tab:mt-24">
        <div className="spc:col-start-2 spc:col-span-2 mx-auto px-16 sp:px-0 mb-8 spc:mb-0">
          <Image
            src={MySelf}
            width={300}
            height={300}
            alt=""
            className={styles.myself}
          />
        </div>
        <div className="spc:col-span-3 lap:col-span-2 grid justify-center mx-10 tab:mx-0">
          <div className="font-light">
            <h3 className="font-normal border-b border-gray-400 inline-block">
              Me
            </h3>
            <p className="mt-2">1988年富山県富山市生まれ。</p>
            <p className="mt-2">神奈川県横浜市在住。</p>{" "}
            <p className="mt-2">
              趣味はPCゲームや、美味しいお店を探して飲みに行く事。
            </p>
          </div>
          <div className="font-light mt-8">
            <h3 className="font-normal border-b border-gray-400 inline-block">
              Business
            </h3>
            <p className="mt-2">Biz dev、セールス、マーケティング</p>
          </div>
          <div className="font-light mt-4">
            <h3 className="font-normal border-b border-gray-400 inline-block">
              Development
            </h3>
            <p className="mt-2 leading-relaxed">
              HTML/CSS、tailwindCSS、Next.js、React、Ruby on
              rails、wordpress、AdobeXD、Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;

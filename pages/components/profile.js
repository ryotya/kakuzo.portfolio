import Image from "next/image";
import LifeNet from "../../public/images/lifenet-work.png";

const profile = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-5xl font-thin tracking-wider">Profile</h2>
      </div>
      <div className="grid grid-cols-6 mt-24">
        <div className="col-start-2 col-span-2">
          <Image
            src={LifeNet}
            width={300}
            height={300}
            alt=""
            className="rounded-full border-2"
          />
        </div>
        <div className="col-span-2">
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
              rails、wordpress、Adobe全般
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;

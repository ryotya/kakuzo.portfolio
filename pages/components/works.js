import Image from "next/image";
import LifeNet from "../../public/images/lifenet-work.png";

const works = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-5xl font-thin tracking-wider">Works</h2>
      </div>
      <div className="grid grid-cols-8 gap-12 mt-12">
        {/* 1-line */}
        <div className="col-start-2 col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>

        {/* 2-line */}
        <div className="col-start-2 col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>

        {/* 2-line */}
        <div className="col-start-2 col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Image src={LifeNet} width={500} height={500} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default works;

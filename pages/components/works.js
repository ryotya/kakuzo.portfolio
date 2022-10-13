import Image from "next/image";
import Link from "next/link";
import LifeNet from "../../public/images/lifenet-work.png";
import KaruFuka from "../../public/images/karufuka-work.png";

const works = () => {
  return (
    <div id="works">
      <div className="flex justify-center">
        <h2 className="text-5xl font-thin tracking-wider">Works</h2>
      </div>
      <div className="grid grid-cols-8 gap-12 mt-20">
        {/* 1-line */}
        <div className="col-start-2 col-span-2">
          <Link href="/works/lifenet">
            <a>
              <Image src={LifeNet} width={500} height={500} alt="" />
            </a>
          </Link>
          <div className="text-center mt-4">
            <p className="font-medium">ライフネット生命</p>
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={KaruFuka} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-medium">karufuka(株)コーポレートサイト</p>
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>

        {/* 2-line */}
        <div className="col-start-2 col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>

        {/* 2-line */}
        <div className="col-start-2 col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-light">Next.js, HTML/CSS, tailwindCSS</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="border">
            <Link href="https://www.lifenet-seimei.co.jp/">
              <a target="blank">
                <Image src={LifeNet} width={500} height={500} alt="" />
              </a>
            </Link>
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

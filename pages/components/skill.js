import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import InsightsIcon from "@mui/icons-material/Insights";

const skill = () => {
  return (
    <div id="skills">
      <div className="flex justify-center">
        <h2 className="text-4xl tab:text-5xl font-thin tracking-wider">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 spc:grid-cols-8 justify-center mt-12 tab:mt-16">
        <div className="spc:col-start-2 spc:col-span-2 text-center">
          <h3 className="text-3xl font-light">ビジネス開発</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            biz dev
          </p>
          <div className="flex justify-center mt-4 sp:mt-8">
            <DashboardCustomizeIcon className="text-9xl" />
            {/* <svg
              className="h-28 w-28 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />{" "}
              <line x1="12" y1="12" x2="20" y2="7.5" />{" "}
              <line x1="12" y1="12" x2="12" y2="21" />{" "}
              <line x1="12" y1="12" x2="4" y2="7.5" />{" "}
              <line x1="16" y1="5.25" x2="8" y2="9.75" />
            </svg> */}
          </div>
          <div className="mt-4 sp:mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-3/4 sp:w-1/2 spc:w-5/6">
              ビジネスにつながるインサイトやペインを見つけ出し、そのインサイトやペインからどのような手段でアプローチするのが最適なのかを洗い出します。自らMVPを作成し、PDCAサイクルを繰り返し的確なビジネスを創出します。
            </p>
          </div>
        </div>
        <div className="col-span-2 text-center mt-16 sp:mt-24 spc:mt-0">
          <h3 className="text-3xl font-light">マーケティング</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            marketing
          </p>
          <div className="flex justify-center mt-4 sp:mt-8">
            <InsightsIcon className="text-9xl" />
            {/* <svg
              className="h-28 w-28 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
              <polyline points="17 6 23 6 23 12" />
            </svg> */}
          </div>
          <div className="mt-4 sp:mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-3/4 sp:w-1/2 spc:w-5/6">
              SNS運用、広告運用、SEO対策、コンテンツマーケティング、など複数の手段を用いてマーケティングを行うことが可能です。また、データ分析や自らWebサイトを最適化させることでより効果的な施策を実施します。
            </p>
          </div>
        </div>
        <div className="col-span-2 text-center mt-16 spc:mt-0">
          <h3 className="text-3xl font-light">コーディング</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            coding
          </p>
          <div className="flex justify-center mt-4 sp:mt-8">
            <LaptopMacIcon className="text-9xl" />
            {/* <svg
              className="h-28 w-28 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="7" cy="18" r="2" strokeWidth="1" />{" "}
              <circle cx="7" cy="6" r="2" strokeWidth="1" />{" "}
              <circle cx="17" cy="12" r="2" strokeWidth="1" />{" "}
              <line x1="7" y1="8" x2="7" y2="16" strokeWidth="1" />{" "}
              <path d="M7 8a4 4 0 0 0 4 4h4" strokeWidth="1" />
            </svg> */}
          </div>
          <div className="mt-4 sp:mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-3/4 sp:w-1/2 spc:w-5/6">
              HTML,CSS、JavaScriptを用いて、動きのあるWebサイトや、アプリのUI実装などをメインにコーディングを行います。基本はモダンなフレームワーク採用し、流行に合わせたUIを意識して実装を行なっていきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skill;

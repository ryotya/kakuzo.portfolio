const skill = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-6xl font-thin tracking-wider">Skills</h2>
      </div>
      <div className="grid grid-cols-8 justify-center mt-16">
        <div className="col-start-2 col-span-2 text-center">
          <h3 className="text-3xl font-light">ビジネス開発</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            biz dev
          </p>
          <div className="flex justify-center mt-8">
            <svg
              class="h-28 w-28 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />{" "}
              <line x1="12" y1="12" x2="20" y2="7.5" />{" "}
              <line x1="12" y1="12" x2="12" y2="21" />{" "}
              <line x1="12" y1="12" x2="4" y2="7.5" />{" "}
              <line x1="16" y1="5.25" x2="8" y2="9.75" />
            </svg>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-5/6">
              お客様の要望をヒアリングし、現状の問題点を洗い出し、効果的なプランを作成いたします。制作ではデザインに入る前の事前の準備が特に重要になります。何が必要で何が必要でないのかを判断し、費用対効果の高いWebサイトを作るための土台を作ります。
            </p>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-3xl font-light">マーケティング</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            marketing
          </p>
          <div className="flex justify-center mt-8">
            <svg
              class="h-28 w-28 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />{" "}
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-5/6">
              お客様の要望をヒアリングし、現状の問題点を洗い出し、効果的なプランを作成いたします。制作ではデザインに入る前の事前の準備が特に重要になります。何が必要で何が必要でないのかを判断し、費用対効果の高いWebサイトを作るための土台を作ります。
            </p>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-3xl font-light">コーディング</h3>
          <p className="tracking-wide text-lg font-extralight mt-4 uppercase">
            coding
          </p>
          <div className="flex justify-center mt-8">
            <svg
              class="h-28 w-28 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="7" cy="18" r="2" stroke-width="1" />{" "}
              <circle cx="7" cy="6" r="2" stroke-width="1" />{" "}
              <circle cx="17" cy="12" r="2" stroke-width="1" />{" "}
              <line x1="7" y1="8" x2="7" y2="16" stroke-width="1" />{" "}
              <path d="M7 8a4 4 0 0 0 4 4h4" stroke-width="1" />
            </svg>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-sm leading-6 font-light text-left w-5/6">
              お客様の要望をヒアリングし、現状の問題点を洗い出し、効果的なプランを作成いたします。制作ではデザインに入る前の事前の準備が特に重要になります。何が必要で何が必要でないのかを判断し、費用対効果の高いWebサイトを作るための土台を作ります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skill;

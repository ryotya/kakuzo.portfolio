import Image from "next/image";
import Logo from "../../public/images/kakuzo-logo-re.png";
import Link from "next/link";
import autoprefixer from "autoprefixer";

const logoSection = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto h-28 mt-8 items-center">
      <div>
        <Link href="/#">
          <a>
            <Image src={Logo} width={160} height={90} alt="" />
          </a>
        </Link>
      </div>
      <div className="flex">
        <p className="text-3xl font-light">f</p>
        <p className="ml-4 flex items-center pt-2">
          <svg
            className="h-5 w-5 text-gray-700"
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
            <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default logoSection;

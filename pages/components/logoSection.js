import Image from "next/image";
import Logo from "../../public/images/kakuzo-logo-re.png";
import Link from "next/link";
import autoprefixer from "autoprefixer";
import FacebookIcon from "@mui/icons-material/Facebook";

const logoSection = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto h-20 mt-2 tab:mt-8 items-center">
      <div>
        <Link href="/#">
          <a>
            <Image src={Logo} width={160} height={90} alt="" />
          </a>
        </Link>
      </div>
      <div className="flex mr-4 pc:mr-0">
        <Link href="https://www.facebook.com/ryota.kakui">
          <a target="_blank">
            <FacebookIcon />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default logoSection;

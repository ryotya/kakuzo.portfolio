import Link from "next/link";

const footer = () => {
  return (
    <div className="h-28">
      <div className="flex justify-between container-foo">
        <div>
          <Link href="#">
            <a className="text-2xl font-light hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Profile
            </a>
          </Link>
          <Link href="#">
            <a className="text-2xl font-light ml-6 hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Works
            </a>
          </Link>
          <Link href="#">
            <a className="text-2xl font-light ml-6 hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Contact
            </a>
          </Link>
        </div>
        <div>
          <p className="font-light">©︎ kakuzo All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;

import Link from "next/link";

const footer = () => {
  return (
    <div className="h-28">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div>
          <Link href="#">
            <a className="text-2xl hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Profile
            </a>
          </Link>
          <Link href="#">
            <a className="text-2xl ml-6 hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Works
            </a>
          </Link>
          <Link href="#">
            <a className="text-2xl ml-6 hover:text-gray-500 hover:border-b border-gray-500 duration-200">
              Contact
            </a>
          </Link>
        </div>
        <div>
          <p>©︎ kakuzo All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;

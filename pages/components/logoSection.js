import Link from "next/link";

const logoSection = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto h-28 items-end">
      <div>
        <Link href="/#">
          <a>
            <p className="text-4xl font-medium tracking-widest">k.</p>
          </a>
        </Link>
      </div>
      <div className="flex">
        <p className="text-3xl font-light">f</p>
        <p className="ml-4 flex items-center pt-2">
          <svg
            class="h-5 w-5 text-gray-700"
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
            <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default logoSection;

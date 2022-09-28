import Link from "next/link";

const logoSection = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto h-40 items-end">
      <div>
        <Link href="/#">
          <a className="text-4xl">
            <svg
              class="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
              <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
              <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
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

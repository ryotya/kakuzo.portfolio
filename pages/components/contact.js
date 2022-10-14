import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center">
        <h2 className="text-5xl font-thin tracking-wider">Contact</h2>
      </div>
      <div className="overflow-hidden pb-16 px-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-4">
        <div className="relative mx-auto max-w-xl">
          <div className="mt-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label for="first-name" className="block text-sm font-light">
                  お名前
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-purple-400 focus:ring-2 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="company" className="block text-sm font-light">
                  会社名
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autocomplete="organization"
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-purple-400 focus:ring-2 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="email" className="block text-sm font-light">
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-purple-400 focus:ring-2 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="phone-number" className="block text-sm font-light">
                  電話番号
                </label>
                <div className="relative mt-1 ">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autocomplete="tel"
                    className="block w-full border-gray-300 border py-3 px-4 pl-20 focus:ring-purple-400 focus:ring-2 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block text-sm font-light">
                  内容
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-purple-400 focus:ring-2 duration-200"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 flex justify-center mt-4">
                {/* <button
                  type="submit"
                  className="inline-flex w-1/2 items-center justify-center border border-transparent bg-purple-500 px-6 py-3 text-base font-light tracking-widest text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 duration-300"
                >
                  送信
                </button> */}
                <Stack spacing={2} direction="row">
                  <Button
                    variant="outlined"
                    className="w-48 h-12 text-cyan-500 border-cyan-500"
                  >
                    送信
                  </Button>
                </Stack>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

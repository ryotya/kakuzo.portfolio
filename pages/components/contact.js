import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center">
        <h2 className="text-4xl tab:text-5xl font-thin tracking-wider">
          Contact
        </h2>
      </div>
      <div className="overflow-hidden pb-16 px-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-4 mx-6">
        <div className="relative mx-auto max-w-xl">
          <div className="mt-12">
            <form
              method="POST"
              data-netlify="true"
              action="/thankyou"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-light"
                >
                  お名前
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-cyan-500 focus:ring-1 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-light">
                  会社名
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    required
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-cyan-500 focus:ring-1 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-light">
                  メールアドレス
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-cyan-500 focus:ring-1 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-light"
                >
                  電話番号
                </label>
                <div className="relative mt-1 ">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full border-gray-300 border py-3 px-4 focus:ring-cyan-500 focus:ring-1 duration-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-light">
                  内容
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="block w-full border-gray-300 py-3 px-4 border focus:ring-cyan-500 focus:ring-1 duration-200"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 flex justify-center mt-4">
                <Stack spacing={2} direction="row">
                  <Button
                    type="submit"
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

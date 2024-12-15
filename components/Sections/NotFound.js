import { categorys } from "@/helper/utils";
import Link from "next/link";
import React from "react";

const NotFound = ({ quest }) => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-indigo-600 dark:text-indigo-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find anythinge realated to {quest}. You'll find lots
            to explore on the home page.{" "}
          </p>
          <Link
            href="/"
            className=" inline-flex text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-indigo-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      <div className="-mt-5">
        <p className="text-center">or try</p>
        <div className="w-full flex overflow-auto gap-5 justify-center items-center pl-24 lg:pl-0">
          {categorys
            .filter((item) => item.name !== quest)
            .map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex text-white bg-black hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-slate-900 my-4"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NotFound;

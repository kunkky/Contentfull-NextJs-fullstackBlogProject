import Image from "next/image";
import React from "react";
import { displayHumanDate, truncateText } from "@/helper/utils";
import Link from "next/link";

const Cards = ({ blog }) => {
  return (
    <div>
      <div className="group w-full  border border-gray-300 rounded-2xl">
        <div className="flex items-center relative h-[200px] w-full bg-slate-400 rounded-t-2xl">
          <Image
            src={`https:${blog?.featureImage?.fields?.file?.url}` || ""}
            alt="Image"
            objectFit="cover"
            layout="fill"
            className="rounded-t-2xl"
          />
        </div>
        <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
          <span className="text-indigo-600 font-medium mb-3 block text-xs">
            {displayHumanDate(blog?.date)}
          </span>
          <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
            {blog?.title}
          </h4>
          <p className="text-gray-500 leading-6 mb-10 w-full ">
            {truncateText(blog?.content?.content[0]?.content[0]?.value, 12)}
          </p>
          <div className="flex justify-between">
            <Link
              href={`/blogs/${blog?.slug}`}
              className="cursor-pointer text-lg text-indigo-600 font-semibold"
            >
              Read More..
            </Link>
            <Link
              href={`/category/${blog?.category}`}
              className="cursor-pointer text-white text-xs bg-slate-400 rounded-lg p-1  w-fit"
            >
              {blog?.category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

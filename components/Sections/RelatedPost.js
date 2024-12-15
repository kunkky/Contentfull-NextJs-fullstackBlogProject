import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedPost = ({ relatedPosts }) => {
  return (
    <div className="w-full flex gap-10 justify-center items-center my-10">
      {relatedPosts.map((post) => (
        <div
          key={post.sys.id}
          className=" w-1/4 border-slate-300 border rounded-2xl"
        >
          <div className="w-full h-[120px]  relative">
            <Image
              src={
                `https:${post?.fields?.featureImage?.fields?.file?.url}` ||
                "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              }
              alt=""
              layout="fill"
              className="rounded-t-2xl"
              objectFit="cover"
            />
          </div>
          <div className="p-5">
            <h1>{post.fields.title}</h1>
            <Link
              href={`/blogs/${post?.fields?.slug}`}
              className="cursor-pointer text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Read
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedPost;

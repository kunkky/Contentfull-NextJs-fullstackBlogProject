import { createClient } from "contentful";
import Cards from "../components/Blog/Cards";
import Link from "next/link";
import BlogSlider from "@/components/Sections/BlogSlider";

const LIMIT = 9; // Number of posts per page

export async function getServerSideProps({ query }) {
  const currentPage = parseInt(query.page || "1", 10); // Default to page 1 if no param is provided
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blog",
    limit: LIMIT,
    skip: (currentPage - 1) * LIMIT, // Skip posts for previous pages
  });

  return {
    props: {
      blogs: res.items,
      total: res.total, // Total number of posts
      currentPage,
      totalPages: Math.ceil(res.total / LIMIT),
    },
  };
}

export default function Blogs({ blogs, currentPage, totalPages }) {
  return (
    <div className="w-full">
      <section className="pb-10 ">
        <BlogSlider blogs={blogs} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className=" text-4xl font-bold text-gray-900 text-center mb-16 mt-10">
            Our latest blog
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center gap-10 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {blogs.map((blog) => (
              <div key={blog.sys.id}>
                <Cards blog={blog.fields} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination mt-12 flex justify-center items-center space-x-4">
            {currentPage > 1 && (
              <Link
                href={`/?page=${currentPage - 1}`}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <Link
                href={`/?page=${index + 1}`}
                key={index}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={`/?page=${currentPage + 1}`}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

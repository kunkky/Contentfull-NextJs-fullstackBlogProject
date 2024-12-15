import React from "react";
import { createClient } from "contentful";
import Link from "next/link";
import Cards from "@/components/Blog/Cards";

const LIMIT = 6; // Number of posts per page

export async function getServerSideProps(context) {
  // Extract dynamic category from URL params
  const { category } = context.params;

  // Extract query parameters (e.g., ?page=2)
  const currentPage = parseInt(context.query.page || "1", 10); // Default to page 1 if no query is provided

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // Fetch posts filtered by category with pagination
  const res = await client.getEntries({
    content_type: "blog",
    "fields.category": category, // Filter by category
    limit: LIMIT,
    skip: (currentPage - 1) * LIMIT, // Calculate how many posts to skip
  });

  return {
    props: {
      blogs: res.items,
      total: res.total, // Total number of posts in this category
      category,
      currentPage,
      totalPages: Math.ceil(res.total / LIMIT), // Calculate total pages
    },
  };
}

const Category = ({ blogs, category, currentPage, totalPages }) => {
  return (
    <div className="recipe-list">
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Blog Posts in {category}
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center gap-10">
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
                href={`/category/${category}?page=${currentPage - 1}`}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <Link
                href={`/category/${category}?page=${index + 1}`}
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
                href={`/category/${category}?page=${currentPage + 1}`}
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
};

export default Category;

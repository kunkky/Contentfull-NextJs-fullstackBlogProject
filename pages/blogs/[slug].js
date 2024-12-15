import SinglePage from "@/components/Pages/SinglePage";
import RelatedPost from "@/components/Sections/RelatedPost";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// Fetch all slugs for static generation
export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blog" });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths, // Return paths directly here
    fallback: false, // Optional: can be 'true', 'false', or 'blocking' based on your use case
  };
}

// Fetch specific blog post and related posts based on the slug
export async function getStaticProps({ params }) {
  // Fetch the specific blog post based on the slug
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  const blogPost = items[0];

  // Fetch related posts, e.g., posts in the same category or with similar tags
  const relatedPostsRes = await client.getEntries({
    content_type: "blog",
    "fields.category": blogPost.fields.category, // Replace 'category' with your related field
    limit: 3, // Limit to 3 related posts
    "fields.slug[ne]": params.slug, // Exclude the current post
  });

  return {
    props: {
      blogPost, // Current blog post
      relatedPosts: relatedPostsRes.items, // Related blog posts
    },
  };
}

// Page component
export default function PostDetails({ blogPost, relatedPosts }) {
  return (
    <div>
      <SinglePage blogPost={blogPost} />;
      <RelatedPost relatedPosts={relatedPosts} />
    </div>
  );
}

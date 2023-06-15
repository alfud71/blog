import { getAllPosts } from "../service/posts";
import PostsGrid from "./PostsGrid";

async function FeaturedPosts() {
  //
  const posts = await getAllPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;

import blogs from "../src/data/blogs.json";

export interface Blog {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

export function getBlogs(): Blog[] {
  return (blogs as Blog[]).slice(0, 3);
}

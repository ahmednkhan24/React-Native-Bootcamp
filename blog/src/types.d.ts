type BlogPost = {
  id: number;
  title: string;
  content: string;
};

type AddBlogPost = (
  title: string,
  content: string,
  callback: () => void
) => void;

type EditBlogPost = (
  id: string,
  title: string,
  content: string,
  callback: () => void
) => void;

type Context = {
  state: BlogPost[];
  deleteBlogPost: () => void;
  editBlogPost: EditBlogPost;
  addBlogPost: AddBlogPost;
};

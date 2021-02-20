import createDataContext from './createDataContext';

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'edit_blogpost':
      const { id } = action.payload;
      return state.map((blogPost: BlogPost) =>
        blogPost.id === id ? action.payload : blogPost
      );
    case 'delete_blogpost':
      return state.filter(
        (blogPost: BlogPost) => blogPost.id !== action.payload
      );
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: string, content: string, callback: () => void) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const editBlogPost = (dispatch: any) => {
  return (id: number, title: string, content: string, callback: () => void) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: number) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const initialState = [{ id: 1, title: 'Test Post', content: 'Test Content' }];

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  initialState
);

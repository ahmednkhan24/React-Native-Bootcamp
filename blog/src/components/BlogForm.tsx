import React, { useState } from 'react';
import { Button } from 'react-native';
import TextAndTextInput from '../components/TextAndTextInput';

type BlogFormProps = {
  initialTitle: string;
  initialContent: string;
  submitText: string;
  onSubmit: (newTitle: string, newContent: string) => void;
};

const BlogForm: React.FC<BlogFormProps> = ({
  initialTitle,
  initialContent,
  submitText,
  onSubmit
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <>
      <TextAndTextInput
        header="Enter Title:"
        text={title}
        onTextChange={setTitle}
      />
      <TextAndTextInput
        header="Enter Content:"
        text={content}
        onTextChange={setContent}
      />
      <Button title={submitText} onPress={() => onSubmit(title, content)} />
    </>
  );
};

export default BlogForm;

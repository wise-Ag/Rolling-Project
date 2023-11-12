import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "../TextField/MarkDown.module.css";
import { useEffect, useRef } from "react";

const MarkDown = () => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdownContent = editorInstance.getMarkdown();

      console.log(markdownContent);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Editor
        initialValue="I am your reach text editor."
        previewStyle="vertical"
        height="26rem"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        ref={editorRef}
      />
    </div>
  );
};

export default MarkDown;

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "../TextField/MarkDown.module.css";
import { useRef } from "react";

const MarkDown = ({ setter }) => {
  const editorRef = useRef();

  const handleChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setter(data);
  };

  return (
    <div className={styles.container}>
      <Editor
        initialValue="I am your reach text editor."
        previewStyle="vertical"
        height="26rem"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        ref={editorRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default MarkDown;

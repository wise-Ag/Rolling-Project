import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import styles from '../TextField/MarkDown.module.css';

export const MarkDown = () => (
  <div className={styles.container}>
    <Editor
      initialValue='hello react editor world!'
      previewStyle='vertical'
      height='260px'
      initialEditType='wysiwyg'
      useCommandShortcut={false}
      plugins={[colorSyntax]}
    />
  </div>
);

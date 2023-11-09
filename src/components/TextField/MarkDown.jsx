import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import styles from '../TextField/MarkDown.module.css';

const MarkDown = () => (
  <div className={styles.container}>
    <Editor
      initialValue='hello react editor world!' // 내용의 초기 값으로, 반드시 마크다운 문자열 형태여야 함
      previewStyle='vertical' // Markdown 모드의 미리보기 스타일 tab | vertical
      height='260px' // 에디터 영역의 높이 값 (OOOpx || auto)
      initialEditType='wysiwyg' // 최초로 보여줄 에디터 타입 (wysiwyg || markdown)
      useCommandShortcut={false}
    />
  </div>
);

export default MarkDown;

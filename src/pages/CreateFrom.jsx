import { useState } from "react";
import Header from "../components/Header/Header";
import Input from "../components/TextField/Input";
import styles from "./CreateFrom.module.css"
import MarkDown from "../components/TextField/MarkDown";
import Dropdown from "../components/TextField/Dropdown";

const CreateFrom = () => {
  const [ from, setFrom ] = useState('');

  const handleChange = (e) => {
    setFrom(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <Header></Header>

    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        
      <div className={styles.inputContainer}>
          <label><h2 className={styles.title}>From.</h2></label>
          <Input placeholder="이름을 입력해 주세요." onChange={handleChange} value={from}></Input>
        </div>
        
        <h2 className={styles.title}>프로필 이미지</h2>
        <MarkDown/>
        <h2 className={styles.title}>상대와의 관계</h2>
        <Dropdown></Dropdown>
        <h2 className={styles.title}>내용을 입력해 주세요</h2>
        <h2 className={styles.title}>폰트 선택</h2>
        
        
        
        
        
        </form></div>
    </>
  )
}

export default CreateFrom;
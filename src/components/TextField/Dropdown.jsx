import { useState } from "react";
import styles from "./Dropdown.module.css";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = ({ option, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        {selected}
        <BiChevronDown size={20} className={open && styles.arrow__top} />
      </div>
      <ul className={open ? styles.ul__open : styles.ul__close}>
        {option?.map((name) => {
          console.log(name);

          const handleClick = () => {
            if (name?.toLowerCase() !== selected.toLowerCase()) {
              setSelected(name);
              setOpen(false);
            }
          };

          return (
            <li key={name} className={styles.li} onClick={handleClick}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;

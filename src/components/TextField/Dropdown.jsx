import { useEffect, useState } from 'react';
import styles from './Dropdown.module.css';
import { BiChevronDown } from 'react-icons/bi';

const Dropdown = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then((res) => res.json())
      .then((body) => {
        setData(body);
      });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container} onClick={() => setOpen(!open)}>
        {selected ? selected : 'Select'}
        <BiChevronDown size={20} className={open && styles.arrow__top} />
      </div>
      <ul className={open ? styles.ul__open : styles.ul__close}>
        {data?.map(({ name }) => (
          <li
            key={name}
            className={styles.li}
            onClick={() => {
              if (name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(name);
                setOpen(false);
              }
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

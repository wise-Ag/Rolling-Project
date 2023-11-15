import styles from "./CardListPage.module.css";

import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import useRecipientsData from "../hooks/useRecipientsData";
import CardListContainer from "../components/CardList/CardListContainer";

const CardListPage = () => {
  const { data, loading: isLoading } = useRecipientsData();
  const { popular, recent } = data;

  return (
    <>
      <Header
        button={
          <Button color={"outlined"} size={"40"}>
            롤링 페이퍼 만들기
          </Button>
        }
      />
      <div className={styles.cardListPage}>
        <div className={styles.contentWrapper}>
          <div className={styles.container}>
            <h2 className={styles.listName}>인기 롤링페이퍼 🔥</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <CardListContainer data={popular} />
            )}
          </div>
          <div className={styles.container}>
            <h2 className={styles.listName}>최근에 만든 롤링 페이퍼 ⭐️️</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <CardListContainer data={recent} />
            )}
          </div>
        </div>
        <Button shape={"primary"} size={"56"} width={"28"}>
          나도 만들어보기
        </Button>
      </div>
    </>
  );
};

export default CardListPage;

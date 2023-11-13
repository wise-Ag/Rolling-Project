import styles from "./CardList.module.css";

import Button from "../Button/Button";
import CardListItemContainer from "./CardListItemContainer";

const CardList = ({
  data,
  containerRef,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onNextSlide,
  onPrevSlide,
  currentIndex,
}) => {
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardListWrapper}>
        <ul
          className={styles.cardList}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={containerRef}
        >
          {data.map(({ id, name, backgroundColor, backgroundImageURL, messageCount, recentMessages }) => {
            const profileImageURLs = recentMessages.map((message) => message.profileImageURL);

            return (
              <li key={id}>
                <CardListItemContainer
                  recipientId={id}
                  recipientName={name}
                  backgroundColor={backgroundColor}
                  backgroundImageURL={backgroundImageURL}
                  messageCount={messageCount}
                  profileImageURLs={profileImageURLs}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {data.length > 4 && (
        <div className={styles.navigationButtons}>
          {currentIndex !== 0 && (
            <div className={styles.previousButton}>
              <Button shape={"arrow"} direction={"left"} onClick={onPrevSlide} />
            </div>
          )}
          {currentIndex !== data.length - 4 && (
            <div className={styles.nextButton}>
              <Button shape={"arrow"} direction={"right"} onClick={onNextSlide} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardList;

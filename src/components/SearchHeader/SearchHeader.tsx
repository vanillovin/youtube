import React, { memo, useRef } from 'react'

import styles from './SearchHeader.module.css';

interface SearchHeaderProps {
  onSearch(query: string): void;
  onLogoClick(): void;
}

// memo - 전달되는 props이 변경이 되지 않으면 re-render가 되지 않음
const SearchHeader = memo(
  ({ onSearch, onLogoClick }: SearchHeaderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSearch = () => {
      if (inputRef.current !== null) {
        const value = inputRef.current.value;
        onSearch(value);
      }
    };

    const onClick = () => {
      handleSearch();
    };

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

    return (
      <header className={styles.header}>
        <div className={styles.logo} onClick={onLogoClick}>
          <img className={styles.img} src="/images/logo.png" alt="logo" />
          <h1 className={styles.title}>Youtube</h1>
        </div>
        <div className={styles.scon}>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Search..."
            onKeyPress={onKeyPress}
            />
          <button className={styles.button} type="submit" onClick={onClick}>
            <img
              className={styles.buttonImg}
              src="/images/search.png"
              alt="search"
            />
          </button>
        </div>
        <img className={styles.profile} src="./images/unnamed.jpg" alt="profile" />
      </header>
    );
  }
)

export default SearchHeader
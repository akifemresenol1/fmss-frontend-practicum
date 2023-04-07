import React from 'react';
import styles from './styles.module.css';

// Button bileşeni tanımlama
export const Button = (props) => {
  // Buton bileşeni oluşturma ve sınıflandırma
  return (
    <div className={styles.container}>
      <button
        className={props.type ? styles[props.type] : styles.primary}
        {...props}
      >
        {props.text}
      </button>
    </div>
  );
};
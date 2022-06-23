import React from 'react';
import styles from './styles.module.scss';

export default function Loading() {
  return (
    <div className={styles.container}>
      <lottie-player
        src="https://assets7.lottiefiles.com/private_files/lf30_ykdoon9j.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

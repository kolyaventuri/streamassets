import {h, Component} from 'preact';

import styles from './marquee.scss';

export default ({text}) => {
  return (
    <div className={styles.text}>
      <p>{text}</p>
    </div>
  );
};

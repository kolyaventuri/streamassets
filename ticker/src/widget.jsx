import {h, Component} from 'preact';

import styles from './widget.scss';

export default class Widget extends Component {
  render() {
    return (
      <div className={styles.ticker}>
        <img src={require('./images/logo_small.png')}/>
        <div className={styles.infoBox}/>
      </div>
    );
  }
}

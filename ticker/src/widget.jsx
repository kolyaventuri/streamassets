import {h, Component} from 'preact';
import cx from 'classnames';
import Marquee from './marquee.jsx';

import styles from './widget.scss';

export default class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      open: false
    };
  }

  render() {
    const {message, open} = this.state;
    const width = open ? null : 0;

    return (
      <div className={styles.ticker}>
        <img src={require('./images/logo_small.png')}/>
        <div className={styles.infoBox} style={{width}}>
          <Marquee text={message} running={open}/>
        </div>
      </div>
    );
  }
}

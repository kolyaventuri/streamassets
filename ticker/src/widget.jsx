import {h, Component} from 'preact';
import Marquee from './marquee.jsx';

import styles from './widget.scss';

export default class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {message: 'Some super long message that definitely wont fit in the box'};
  }

  render() {
    const {message} = this.state;

    return (
      <div className={styles.ticker}>
        <img src={require('./images/logo_small.png')}/>
        <div className={styles.infoBox}>
          <Marquee text={message}/>
        </div>
      </div>
    );
  }
}

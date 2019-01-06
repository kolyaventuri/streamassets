import {h, Component} from 'preact';
import cx from 'classnames';
import Marquee from './marquee.jsx';

import StringFormatter from '../../string-formatter';
import strings from './strings';

import styles from './widget.scss';

const {getString} = new StringFormatter(strings);

const displayTime = 5;
const waitTime = 10;
const stringNames = Object.keys(strings);

export default class Widget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      open: false
    };

    this.key = 0;
  }

  componentDidMount() {
    this.showNextMessage();
  }

  showNextMessage = () => {
    this.key += 1;
    if (this.key > stringNames.length - 1) { this.key = 0; }

    const key = stringNames[this.key];

    this.setState({
      message: getString(key),
      open: true
    }, () => {
      setTimeout(this.hideMessage, displayTime * 1000);
    });
  };

  hideMessage = () => {
    this.setState({
      open: false
    }, () => {
      setTimeout(this.showNextMessage, waitTime * 1000);
    });
  };

  render() {
    const {message, open} = this.state;
    const width = open ? null : 0;
    const animClass = open ? styles.animated : null;

    return (
      <div className={styles.ticker}>
        <img src={require('./images/logo_small.png')} className={animClass} />
        <div className={styles.infoBox} style={{width}}>
          <Marquee text={message} running={open}/>
        </div>
      </div>
    );
  }
}

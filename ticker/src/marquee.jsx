import {h, Component, createRef} from 'preact';

import styles from './marquee.scss';

const movementInterval = 7;
const movementAmount = 1;

const getCssProp = (elem, prop) =>
  getComputedStyle(elem, null).getPropertyValue(prop);

export default class Marquee extends Component {
  static defaultProps = {
    text: '',
    running: false
  };

  constructor() {
    super(...arguments);

    this.textRef = createRef();

    this.setupMarquee = this.setupMarquee.bind(this);
  }

  setupMarquee() {
    if (this.interval) { clearInterval(this.interval); }
    const {current: textObject} = this.textRef;

    const initialLeft = getCssProp(textObject, 'left');
    const textWidth = getCssProp(textObject, 'width');
    const offsetWidth = textObject.parentElement.offsetWidth;

    this.initialLeft = parseInt(initialLeft) || 0;
    this.textWidth = parseInt(textWidth) || 0;
    this.availableWidth = offsetWidth - this.initialLeft;
    this.availableWidth = this.availableWidth > 0 ? this.availableWidth : 0;

    this.startScroll();
  };

  startScroll = () => {
    if (this.props.running) {
      if (this.availableWidth < this.textWidth) {
        this.interval = setInterval(() => {
          this.moveText();
        }, movementInterval);
      } else {
        console.log('stop');
        this.resetTextPosition();
        clearInterval(this.interval);
      }
    }
  };

  moveText = () => {
    const {current: textObject} = this.textRef;
    const left = parseInt(getCssProp(textObject, 'left'));
    const {textWidth, initialLeft} = this;
    const pos = parseInt(left) || 0;

    if (pos - initialLeft < -(textWidth + initialLeft)) {
      textObject.style.left = textWidth;
      return;
    }

    textObject.style.left = left - movementAmount;
  };

  resetTextPosition = () => {
    this.textRef.current.style.left = this.initialLeft;
  };

  render() {
    const {text} = this.props;
    const {textRef} = this;

    return (
      <div className={styles.text}>
        <p ref={textRef}>{text}</p>
      </div>
    );
  }
}

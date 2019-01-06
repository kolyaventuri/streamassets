import {h, Component, createRef} from 'preact';

import styles from './marquee.scss';

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
  }

  componentDidMount() {
    this.setupMarquee();
  }

  setupMarquee = () => {
    const {current: textObject} = this.textRef;

    const initialLeft = getCssProp(textObject, 'left');
    const textWidth = getCssProp(textObject, 'width');

    this.initialLeft = parseInt(initialLeft) || 0;
    this.textWidth = parseInt(textWidth) || 0;

    this.startScroll();
  };

  startScroll = () => {
    if (this.props.running) {

    }
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

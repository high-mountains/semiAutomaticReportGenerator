import { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);
    let isValid = false;
    if (props.src) {
      isValid = props.src[props.src.length - 1] !== '/';
    }
    this.state = {
      src: isValid ? props.src : '/avatar.png',
      errored: false,
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      src: newProps.src,
      errored: false,
    })
  }
  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.fallbackSrc ? this.props.fallbackSrc : '/avatar.png',
        errored: true,
      });
    }
  }
  render() {
    const { src } = this.state;
    const {
      src: _1,
      fallbackSrc: _2,
      ...props
    } = this.props;
    return (
      <img
        className={props.className ? props.className : 'w-[64rem] h-[64rem] object-cover rounded-full border-gray-500'}
        src={src}
        onError={this.onError}
        {...props}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
};

export default Image
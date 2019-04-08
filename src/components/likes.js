import React from 'react';
import '../styles/likes.css';

class LikeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ liked: !this.state.liked});
  }
  render() {
    let buttonText = this.state.liked? 'Unlike': 'Like';
    return (
      <button onClick={this.handleClick} className="like">
        <i></i>&nbsp;
        {buttonText}</button>
     );
  }
}
export default LikeBtn;

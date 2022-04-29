import { Box } from '@chakra-ui/react';
import { Component } from 'react';

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  handleToggleLike = () => {
    this.setState(
      {
        isLiked: !this.state.isLiked,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <Box onClick={this.handleToggleLike}>
        {this.state.isLiked ? '👍' : '👎'}
      </Box>
    );
  }
}

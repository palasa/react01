import TodoItem  from './TodoItem';
import { List } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import { Component } from 'react';

export default class TodoList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
      })
    ).isRequired,
    onCheckedToggle: PropTypes.func
  };

  render() {
    const {data, onCheckedToggle } = this.props
    return (
      <List spacing={3}>
        {data.map((props) => {
          return <TodoItem key={props.id} onCheckedToggle={this.props.onCheckedToggle} {...props} />;
        })}
      </List>
    );
  }
}

// TodoList.propTypes = {
//     data : PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       isCompleted: PropTypes.bool.isRequired
//     }))
// }

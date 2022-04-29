import { ListItem, ListIcon } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { Component } from 'react';

class TodoItem extends Component {

  toggleCheckbox = () => {
    const { onCheckedToggle, id } = this.props
    onCheckedToggle && onCheckedToggle(id)
  }

  render() {
    const {id, title, isCompleted} = this.props

    return (
      <ListItem key={id}>
        <Checkbox
          colorScheme="green"
          defaultIsChecked={isCompleted}
          onChange={this.toggleCheckbox}
        />
        {/* <input type="checkbox" checked={this.props.isCompleted}/> */}
        {title}
        {isCompleted && (
          <ListIcon as={MdCheckCircle} color="teal.500" />
        )}
      </ListItem>
    );
  }
}

export default TodoItem;

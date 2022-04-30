import { ListItem } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/react';
import { PureComponent } from 'react';

// 使用 pure component ,需要更新时对props和state进行浅比较
class TodoItem extends PureComponent {
  toggleCheckbox = () => {
    const { onCheckedToggle, id } = this.props;
    onCheckedToggle && onCheckedToggle(id);
  };

  // 只渲染修改过的组件，提高效率
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isCompleted !== this.props.isCompleted
  // }

  render() {
    console.log('todo item rendered');
    const { id, title, isCompleted } = this.props;

    return (
      <ListItem key={id}>
        <Checkbox
          colorScheme="green"
          defaultIsChecked={isCompleted}
          onChange={this.toggleCheckbox}
        />
        {title}
        {/* {isCompleted && (
          <ListIcon as={MdCheckCircle} color="teal.500" />
        )} */}
      </ListItem>
    );
  }
}

export default TodoItem;

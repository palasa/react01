import { HStack, Button, Input } from '@chakra-ui/react';
import { Component, createRef } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    // Ref
    this.inputDom = createRef();
  }

  handleInput = (event) => {
    this.setState({
      inputValue: event.currentTarget.value,
    });
  };

  handleAdd = (e) => {
    if (this.state.inputValue.trim() === '') return;
    if ((e.keyCode && e.keyCode === 13) || e.type === 'click') {
      this.props.addTodo(this.state.inputValue);
      this.setState(
        {
          inputValue: '',
        },
        () => {
          this.inputDom.current.focus();
        }
      );
    }
  };

  render() {
    return (
      <HStack>
        <Input
          onChange={this.handleInput}
          onKeyUp={this.handleAdd}
          size="md"
          placeholder="Basic usage"
          value={this.state.inputValue}
          ref={this.inputDom}
        />
        <Button onClick={this.handleAdd} colorScheme="teal">
          ADD Todo
        </Button>
      </HStack>
    );
  }
}

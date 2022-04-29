import React, { Component } from 'react';
import {
  ChakraProvider,
  ThemeProvider,
  ColorModeProvider,
  Box,
  useId,
} from '@chakra-ui/react';
import theme from './theme';
import {
  TodoHeader,
  TodoInput,
  TodoList,
  ChangeColorMode,
  Like,
} from './components';
import ShortUniqueId from 'short-unique-id';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '待办事项列表',
      desc: '今日事今日毕',
      article: '<blockquote>春眠不觉晓，处处闻啼鸟</blockquote>',
      todos: [
        {
          id: 1,
          title: '吃饭',
          isCompleted: true,
        },
        {
          id: 2,
          title: '睡觉',
          isCompleted: false,
        },
      ],
    };
  }

  addTodo = (title) => {
    const uid = new ShortUniqueId({
      dictionary: 'number'
    });
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Number(uid()),
          title: title,
          isCompleted: false,
        },
      ],
    });
  };

  onCheckedToggle = (id) => {
    console.log('onCheckedToggle', id)
    this.setState({
      todos: this.state.todos.map(item=>{
        if(item.id===id){
          item.isCompleted = !item.isCompleted
        }
        return item
      })
    })
    
  }

  render() {
    return (
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Box pos="absolute" right={0} top={0}>
            <ChangeColorMode />
          </Box>
          <div dangerouslySetInnerHTML={{ __html: this.state.article }}></div>
          <TodoHeader desc={this.state.desc}>{this.state.title}</TodoHeader>
          <TodoInput addTodo={this.addTodo} />
          <TodoList data={this.state.todos} onCheckedToggle={this.onCheckedToggle}/>
          <Like />
        </ThemeProvider>
      </ChakraProvider>
    );
  }
}

export default App;

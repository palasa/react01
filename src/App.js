import React, { Component } from 'react';
import { ChakraProvider, ThemeProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import {
  TodoHeader,
  TodoInput,
  TodoList,
  ChangeColorMode,
  Like,
} from './components';
import ShortUniqueId from 'short-unique-id';
import { getTodos } from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
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

  getTodoData = () => {
    this.setState({
      isLoading: true,
    });
    getTodos()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setTimeout(() => {
            this.setState({
              todos: res.data.map((todo) => {
                return {
                  id: todo.id,
                  title: todo.title,
                  isCompleted: todo.completed,
                };
              }),
            });
          }, 2000);
        } else {
          // deal with error status code
        }
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.getTodoData();
  }

  addTodo = (title) => {
    const uid = new ShortUniqueId({
      dictionary: 'number',
    });
    // 将新的todo post到服务器
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
    // console.log('onCheckedToggle', id)
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      }),
    });
  };

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
          {this.state.isLoading ? (
            <Box width="full" height={100} bgColor="teal.400">
              Loading...
            </Box>
          ) : (
            <TodoList
              data={this.state.todos}
              onCheckedToggle={this.onCheckedToggle}
            />
          )}

          <Like />
        </ThemeProvider>
      </ChakraProvider>
    );
  }
}

export default App;

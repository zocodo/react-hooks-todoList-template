import Header from './header.jsx';
import List from './list.jsx';
import Footer from './footer.jsx';
import { useState } from 'react';

export default function TodoAPP () {
  const [ todoList, setTodoList ] = useState([]);

  return (<section className="todoapp">
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </section>);
}

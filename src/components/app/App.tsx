import { Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import TodoList from '../todolist/todolist';



function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <Main />
      </Route>
      <Route exact path={AppRoute.TodoList}>
        <TodoList />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export default App;
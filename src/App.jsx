import './App.css'
import { Admin, fetchUtils,Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';
import { TodoList } from './todos';
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Content-Range', 'posts 0-24/319');
  options.headers.set('Access-Control-Expose-Headers', 'posts 0-24/319')
  const { token } = JSON.parse(localStorage.getItem('token')) || "abdou";
        options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('https://jsonplaceholder.typicode.com', httpClient);
import jsonServerProvider from 'ra-data-json-server';
function App() {

  
  return (
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
    <Resource name="posts" list={PostList} />
    <Resource name="todos" list={TodoList} />
</Admin>
  )
}

export default App

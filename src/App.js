
import './App.css';
import LayOuts from './components/LayOuts/LayOuts';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import MediaDetails from './components/MediaDetails/MediaDetails';
import MediaProvider from './components/Context/MediaContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from './components/Store/Store';
import { Provider } from 'react-redux';

function App() {


  let route = createBrowserRouter([{
    path: "/", element: <LayOuts />, children: [

      { index: true, element: <Home /> },
      { path: 'Movies', element: <Movies /> },
      { path: 'MediaDetails/:id/:media_type', element: <MediaDetails /> },

    ]
  }
  ])


  return <>
    <Provider store={store}>
      <MediaProvider>
        <RouterProvider router={route} />
      </MediaProvider>
    </Provider>

  </>;
}

export default App;



import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../../redux/user/slice'
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';


const renderWithRouterAndRedux = (
  component,
  {
    store = configureStore({ reducer: { user: userSlice } }),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  store,
  history,
});

export default renderWithRouterAndRedux
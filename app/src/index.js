import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-regular'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DefaultApp from './App'
import { configureStore } from './store'
import './index.css'
// import registerServiceWorker from './registerServiceWorker'
// import { unregister } from './registerServiceWorker'

const store = configureStore()

function render(App) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
}

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    render(require('./App').default)
  })
}

render(DefaultApp)

// registerServiceWorker();
// unregister()

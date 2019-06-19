import React from 'react';
import Header from './components/Header';
import Main from './components/Main';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main hello='me'/>
      </div>
    )
  }

}

export default App;

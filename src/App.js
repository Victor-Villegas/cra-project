import React from 'react';
import './App.css';

import User from './components/user';
import Hobbies from './components/hobbies';

const Avatar = () => {
  return (
    <img className="avatar" src="https://sun9-27.userapi.com/c855632/v855632840/197ec6/vQotH0yRswk.jpg?ava=1"
         alt="Avatar"/>
  );
};

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <User
            name={'Miranda'}
            description={'I\'m an awesome person'}
            age={32}
            avatar={<Avatar/>}
          />
          <Hobbies
            hobbies={[
              {
                name: '⚽ Soccer',
                description: 'Every Friday near my house',
                isActive: true
              },
              {
                name: '🎮 Video games',
                description: 'Almost all day 😅',
                isActive: true
              }
            ]}
            showHobbies={true}
            count={(hobbies) => hobbies.filter(hobby => hobby.isActive === true).length}
          />
        </header>
      </div>
    );
  }
}

export default App;

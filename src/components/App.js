import React from 'react';
import Header from './Header';
import User from './User';
import Feed from './Feed';

function App() {
  return (
    <>
    <div class="screen">
      <Header />
      <div class="body">

        <table>
          <tr>
            <td id="column-1">
              <User />
            </td>
            <td id="column-2">
              <Feed />
            </td>
          </tr>
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
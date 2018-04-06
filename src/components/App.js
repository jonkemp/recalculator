import React from 'react';
import AddEntry from '../containers/AddEntry'
import PushEntryList from '../containers/PushEntryList'

const App = () => (
  <div className="container">
    <AddEntry />
    <PushEntryList />
  </div>
);

export default App;

import React from 'react';
import Pages from './pages';
import user from './data';

function App() {
    if (!user) {
        return <div/>;
    }

    return <Pages user={user}/>;
}

export default App;

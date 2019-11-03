import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDetail from './ComponentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            {/* <ApprovalCard> */}
                <ComponentDetail author="Lol" text="hoy there" />
            {/* </ApprovalCard> */}
            <ComponentDetail author="Lel" text="hey there" />
            <ComponentDetail author="Lil" text="hi there" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

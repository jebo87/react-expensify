import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 5000 , note:'bill for february'}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2500, createdAt: 1000 }));
store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('gas'));
// },3000)



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));







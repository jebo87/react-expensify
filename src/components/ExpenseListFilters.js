import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                    value={this.props.filters.text}
                />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


//this function allows to connect to redux store
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};
//we use connect to be able to use the redux store in the props of the element (in this case ExpenseListFilters)
export default connect(mapStateToProps)(ExpenseListFilters);
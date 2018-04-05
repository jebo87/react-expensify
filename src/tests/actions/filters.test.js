import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate settextfilter with no arguments', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
});

test('should generate settextfilter with no arguments', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate sortByAmount', () => { 
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should generate sortByDate', () => { 
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})







// // SORT_BY_AMOUNT
// export const sortByAmount = () => ({
//     type: "SORT_BY_AMOUNT"
// })

// // SORT_BY_DATE
// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// })

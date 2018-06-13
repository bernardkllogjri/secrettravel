import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class Calendar extends Component {

    constructor(props){
        super(props);
        this.state = {
            startDate:null,
            endDate:null,
            focusedInput:null
        }
    }

    render() {
        return (<DateRangePicker
            startDate={null} // momentPropTypes.momentObj or null,
            startDateId="startDate" // PropTypes.string.isRequired,
            endDate={null} // momentPropTypes.momentObj or null,
            endDateId="endDate" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
            openDirection="up"
            transitionDuration={0}
            verticalHeight={0}
        />)
    }

}

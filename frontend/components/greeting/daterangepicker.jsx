// install in terminal:

// 1.
// (
//   export PKG=react-dates;
//   npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
// )

// 2.
// npm install aphrodite react-with-styles react-with-styles-interface-aphrodite


import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

this.state = {
  location: "",
  startDate: null,
  endDate: null,
  adults: "",
  children: "",
  focusedInput: null
};

<DateRangePicker
  startDate={this.state.startDate} 
  startDateId="your_unique_start_date_id"
  endDate={this.state.endDate}
  endDateId="your_unique_end_date_id"
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput}
  onFocusChange={focusedInput => this.setState({ focusedInput })}
  startDatePlaceholderText="mm/dd/yyyy"
  endDatePlaceholderText="mm/dd/yyyy"
  numberOfMonths={1}
/>
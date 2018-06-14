import * as React from 'react';
import AgeDisclaimer from './AgeDisclaimer';
import { withStyles, WithStyles } from 'material-ui/styles';

export interface DayInterface {
  day: string;
  month: string;
  year: string;
}

interface BirthdayProps {
  onChange: ( changeDay: DayInterface, error: boolean ) => void;
  id: string;
  delimiter: string;
  minAge: number;
}

interface BirthdayState {
  day: string; 
  month: string;
  monthinput: string;
  year: string;
  isFocused: boolean;
  hasError: boolean;
  isDayFocused: boolean;
  isMonthFocused: boolean;
  isYearFocused: boolean;
  oldDate: string;
}

class BirthdayField 
  extends React.Component<BirthdayProps & WithStyles<'root' | 'focused' |'fullWidth' >, BirthdayState > {
  private dayInput: any;
  private monthInput: any;
  private yearInput: any;
  private MonthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(props: BirthdayProps & WithStyles < 'root' | 'focused' | 'fullWidth' >) {
    super( props );

    this.state = {
      day: '',
      month: '',
      monthinput: '',
      year: '',
      hasError: false,
      isFocused: false,
      isDayFocused: false,
      isMonthFocused : false,
      isYearFocused: false,
      oldDate : ''
    };

    this.dayChange = this.dayChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }
  
  dayChange(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value.indexOf(this.props.delimiter) !== -1) {
      this.yearInput.focus();
    }
    if (e.target.value.length > 2 ) {
      const yearValue = e.target.value.substring(2, 3);
      if ((/^[12]$/).test(yearValue) ) {
        this.setState({ year: yearValue});
        this.yearInput.focus();
      }
    }
    if ( (/^[0-3]?[0-9]?$/).test(e.target.value) ) {
      let dayValue = e.target.value;
      // Validate max month day
      if (parseInt(dayValue, 10) !== NaN && parseInt(dayValue, 10) > 31 ) {
        dayValue = '31';
      } 
      this.setState({ day: dayValue });
    }
  }
  monthChange(e: any) {
    e.preventDefault();
    e.stopPropagation();
    let _handled = false;
    
    if (e.target.value.indexOf(this.props.delimiter) !== -1) {
      if ( (/^[1].$/).test(e.target.value) ) {
        this.setState({ month: e.target.value, monthinput: this.MonthArray[parseInt(e.target.value, 10) - 1] });
      }
      this.dayInput.focus();
      _handled = true;
    }
    
    if ((/^[jJfFmMaAsSoOnNdD]?[aApPuU]?[yYrRnNlL]?$/).test(e.target.value)) {
      if ((/^[fFsSoOnNdD]$/).test(e.target.value)) {
          const ind =  e.target.value.toUpperCase();
          let newVal = 0;
          switch (ind) {
            case 'F':
              newVal = 2;
              break;
            case 'S':
              newVal = 9;
              break;
            case 'O':
              newVal = 10;
              break;
            case 'N':
              newVal = 11;
              break;
            case 'D':
              newVal = 12;
              break;
            default:
              break;
          }
          this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1]});
          this.dayInput.focus();
          _handled = true;
      }
      if ((/^[aA][pP]$/).test(e.target.value)) {
        let newVal = 4;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[aA][uU]$/).test(e.target.value)) {
        let newVal = 8;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1]});
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[mM][aA][rR]$/).test(e.target.value)) {
        let newVal = 3;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[mM][aA][yY]$/).test(e.target.value)) {
        let newVal = 5;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[mM][aA][yY]$/).test(e.target.value)) {
        let newVal = 5;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[jJ][aA]$/).test(e.target.value)) {
        let newVal = 1;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[jJ][uU][nN]$/).test(e.target.value)) {
        let newVal = 6;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
      if ((/^[jJ][uU][lL]$/).test(e.target.value)) {
        let newVal = 7;
        this.setState({ month: `${newVal}`, monthinput: this.MonthArray[newVal - 1] });
        this.dayInput.focus();
        _handled = true;
      }
    }
    if ((/^[2-9]$/).test(e.target.value)) {
      this.setState({ month: e.target.value, monthinput: this.MonthArray[parseInt(e.target.value, 10) - 1]});
      this.dayInput.focus();
      _handled = true;
    }
    if (e.target.value.length > 2) {
      const dayValue = e.target.value.substring(2, 3);
      if ((/^[1-9]$/).test(dayValue)) {
        this.setState({ day: dayValue });
        this.dayInput.focus();
        _handled = true;
      }
    }
    if ((/^[1][0-9]$/).test(e.target.value)) {
      let monthValue = e.target.value;
      if (parseInt(monthValue, 10) !== NaN && parseInt(monthValue, 10) > 12) {
        monthValue = '12';
      }
      this.setState({ month: monthValue, monthinput: this.MonthArray[parseInt(monthValue, 10) - 1] });
      this.dayInput.focus();
      _handled = true;
    }
    if ((/^[jJfFmMaAsSoOnNdD1-9]?[aApPuU0-9]?[yYrRnNlL]?$/).test(e.target.value) && !_handled) {
      this.setState({ monthinput: e.target.value });
    }
  }
  yearChange(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if ((/^[12]?[09]?[0-9]?[0-9]?$/).test(e.target.value)) {
      this.setState({ year: e.target.value });
    } 
  }
  onBlurHandler(e: any) {
    var tmpDay = parseInt(this.state.day, 10);
    var tmpMonth = parseInt(this.state.month, 10);
    var tmpYear = parseInt(this.state.year, 10);

    let _isDayF = this.state.isDayFocused;
    let _isMonthF = this.state.isMonthFocused;
    let _isYearF = this.state.isYearFocused;
    
    switch (e.target.id) {
      case 'day':
        _isDayF = false;
        break;
      case 'month':
        _isMonthF = false;
        break;
      case 'year':
        _isYearF = false;
        break;
      default:
        break;
    } 

    const _isFocus = _isDayF || _isMonthF || _isYearF;
    
    if ( !isNaN(tmpDay) && !isNaN(tmpMonth) && !isNaN(tmpYear) && !_isFocus) {
      // Calculando Si el día de la fecha es válida
      let maxDay = (
          tmpMonth === 2 ? 
            tmpYear & 3 || !(tmpYear % 25) && tmpYear & 15 ? 
              28 
              : 29 
              : 30 + ( tmpMonth + (tmpMonth >> 3) & 1)
          );
      if (tmpDay > maxDay) {
        this.setState({day: `${maxDay}`});
        tmpDay = maxDay;
      }
      // Validating age
      if (!_isFocus && this.state.oldDate !== `${tmpDay}_${tmpMonth}_${tmpYear}`) {
        const age = this.getAge(tmpDay, tmpMonth, tmpYear);
        if (age >= this.props.minAge ) {
          this.props.onChange({ day: `${tmpDay}`, month: `${tmpMonth}`, year: `${tmpYear}` }, this.state.hasError);
        } else {
          this.setState({hasError: true, oldDate: `${tmpDay}_${tmpMonth}_${tmpYear}`});
        }
      }
    } 
    
    this.setState({
      isDayFocused: _isDayF,
      isMonthFocused: _isMonthF,
      isYearFocused: _isYearF,
      isFocused: (_isDayF || _isMonthF || _isYearF)
    }); 
  }
  getAge (day: number, month: number, year: number) {
      let today = new Date();
      let birthDate = new Date(
        year, month - 1, day
      );
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
  }
  onKeyPress(e: any) {
    switch (e.keyCode) {
      case 8:
        if ( e.target.id === 'day' && e.target.value.length === 0) {
          this.monthInput.focus();
        }
        if ( e.target.id === 'year' && e.target.value.length === 0) {
          this.dayInput.focus();
        }
        break;
      case 9:
        if ( e.target.id === 'month' && (/^[1]$/).test(e.target.value) ) {
          this.setState({monthinput: this.MonthArray[parseInt(e.target.value, 10) - 1] } );
        } 
        break;
      default:
        // do Nothing
    }
  }
  onFocusHandler(e: any) {
    let _isDayF = this.state.isDayFocused;
    let _isMonthF = this.state.isMonthFocused;
    let _isYearF = this.state.isYearFocused;

    switch ( e.target.id ) {
      case 'day':
        _isDayF = true;
        _isMonthF = false;
        _isYearF = false;
        if (this.state.day !== '') {
           e.target.select();
        }
        break;
      case 'month':
        _isMonthF = true;
        _isDayF = false;
        _isYearF = false;
        if (this.state.month !== '') {
           e.target.select();
        }
        break;
      case 'year':
        _isYearF = true;
        _isMonthF = false;
        _isDayF = false;
        if (this.state.year !== '') {
            e.target.select();
        }
        break;
      default:
        break;
    } 

    this.setState({ 
        isDayFocused: _isDayF, 
        isMonthFocused: _isMonthF,
        isYearFocused: _isYearF,
        isFocused: ( _isDayF || _isMonthF || _isYearF )
      }
    );
  }
  render() {
    const myStyle = {
      border: 'none',
      outline: 'none',
      fontFamily: '\'Montserrat\', sans-serif !important',
      color: '#717a8a',
      fontSize: '1rem',
      textAlign: 'center',
      transition: 'margin-left 0.5s ease',
      padding: '17px 2px'
    };
    const _inputClassName = this.state.isFocused ? 
      `${this.props.classes.root} ${this.props.classes.focused} ${this.props.classes.fullWidth}` :
      `${this.props.classes.root} ${this.props.classes.fullWidth}`;
    const monthStyle = this.state.isFocused ?
      { width: '4rem' } :
      { width: '4rem', marginLeft: '4.7rem' } ;
    return (
      <div 
        id={this.props.id} 
        className={_inputClassName}
      >
        <input
          id="month"
          name="month"
          type="text"
          onChange={this.monthChange}
          onKeyDown={this.onKeyPress}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          placeholder="Month"
          value={this.state.monthinput}
          style={Object.assign(
              {}, 
              myStyle, 
              monthStyle
            )}
          maxLength={3}
          ref={el => (this.monthInput = el)}
        />
        
        <span style={myStyle}> {this.props.delimiter}</span>

        <input
          name="day"
          type="text"
          onChange={this.dayChange}
          onBlur={this.onBlurHandler}
          onKeyDown={this.onKeyPress}
          onFocus={this.onFocusHandler}
          placeholder="Day"
          value={this.state.day}
          style={Object.assign(
            {}, 
            myStyle, 
            { width: '2.5rem'}
          )}
          maxLength={3}
          id="day"
          ref={el => (this.dayInput = el)}
        />

        <span style={myStyle}> {this.props.delimiter}</span>
        <input
          id="year"
          name="year"
          type="text"
          onChange={this.yearChange}
          onKeyDown={this.onKeyPress}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          placeholder="Year"
          value={this.state.year}
          style={Object.assign({}, myStyle, { width: '3.5rem' })}
          maxLength={4}
          ref={el => (this.yearInput = el)}
        />
        <AgeDisclaimer
          isFormDialogOpen={this.state.hasError}
          closeHandler={() => {
            this.setState(
              { hasError: false}
              );
            this.monthInput.focus();
          }}
        />
      
      </div>
    );
  }
}

export default withStyles( 
  {
    root: {
      margin: 0,
      marginTop: '16px',
      marginBottom: '8px',
      border: '2px solid #ebeef1 !important',
      padding: 0,
      position: 'relative',
      minWidth: 0,
      flexDirection: 'column',
      lineHeight: '1.1875em',
      borderRadius: '5px',
      backgroundColor: '#f3f6f9 !important'
    },
    focused: {

    },
    fullWidth: {
      width: '100%'
    }
  } 
) < BirthdayProps > (BirthdayField);
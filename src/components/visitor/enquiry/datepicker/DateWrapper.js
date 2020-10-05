import styled from 'styled-components';

const DateWrapper = styled.div`
    height: 320px;

    .DateRangePicker {
        border: 2px solid #00749E;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px; 
        display: block;
        
        .DateRangePickerInput__withBorder {
            color: ${({theme}) => theme.colors.mainBlue};
            border: none;
        }

        .DateInput_input__focused {
            border-bottom: 3px solid #EB8F2D;
        }

        .DayPicker_transitionContainer {
            border: 2px solid #00749E;
        }

        .DayPickerKeyboardShortcuts_show__bottomRight::before{
            border-top: 26px solid transparent;
            border-right: 33px solid #EB8F2D;
        }

        .CalendarMonth_caption {
            color: ${({theme}) => theme.colors.mainBlue};
        }

        .CalendarDay {
            color: ${({theme}) => theme.colors.darkBlue};

            &:hover {
                color: ${({theme}) => theme.colors.white};
            }
        }
        .CalendarDay__default {
            &:hover {
                background: ${({theme}) => theme.colors.orange};
            }
        }

        .CalendarDay__selected, 
        .CalendarDay__selected:active, 
        .CalendarDay__selected:hover {
            background: ${({theme}) => theme.colors.orange};
            color: ${({theme}) => theme.colors.white};
            border: 1px double white;
        }

        .CalendarDay__selected_span {
            background: ${({theme}) => theme.colors.lightOrange};
            border: white;
            color: ${({theme}) => theme.colors.white};
            border: 1px double white;
        }
        
        .CalendarDay__selected_span:active, .CalendarDay__selected_span:hover {
            background-color: ${({theme}) => theme.colors.lightOrange};
            border: white;
        }
        
        .CalendarDay__hovered_span,
        .CalendarDay__hovered_span:hover {
            background: ${({theme}) => theme.colors.lightOrange};
            border: 1px double white;
            color: white
        }
        .CalendarDay__hovered_span:active {
            background: #80e8e0;
            border: 1px double white;
            color: white
        } 
`

export default DateWrapper;
import styled from 'styled-components';
import { Typeahead } from 'react-bootstrap-typeahead';

const StyledTypeahead = styled(Typeahead)`
    .rbt-input {
        border: 2px solid #00749e;
        color: ${({ theme }) => theme.colors.mainBlue};
        width: 100%;
        padding: 17.4px;
        border-radius: 10px;

        &:focus {
            background-color: #fff;
            border-color: ${({ theme }) => theme.colors.orange};
            outline: 0;
            transition: 0.3s;
        }
    }
    .dropdown-item {
        color: ${({ theme }) => theme.colors.darkBlue};
        
        &:hover {
            background-color: ${({ theme }) => theme.colors.darkBlue};
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

export default StyledTypeahead;
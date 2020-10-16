import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const StyledSpinner = styled(Spinner)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.orange};
`;

export default StyledSpinner;
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const StyledLabel = styled( Form.Label )`
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
`

export default StyledLabel;
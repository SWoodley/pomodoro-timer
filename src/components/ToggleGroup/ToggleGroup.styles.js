import styled from 'styled-components';
import { Button } from '../Button/Button.styles.js'

export const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({active}) => active && `opacity: 1;`}
`

export const types = ['Study', 'Break'];
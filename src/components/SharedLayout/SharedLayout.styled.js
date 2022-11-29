import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: ${({ theme }) => theme.borders.main};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;
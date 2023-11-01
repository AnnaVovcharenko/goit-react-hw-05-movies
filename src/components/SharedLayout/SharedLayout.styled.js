import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 20px;
`;

export const NLinc = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;
  border-radius: 4px;
  &:hover {
    color:rgba(234, 239, 90, 0.97);
  }
  &.active {
    color: rgba(234, 239, 90, 0.97);
    background-color: rgba(83, 84, 52, 0.97);
    border: 3px solid #191d1e;
  }
`;
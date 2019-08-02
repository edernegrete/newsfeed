import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { actionsCreators } from '../../store/feed';
const NavStyled = styled.nav`
  width: 100%;
  background: var(--secondary);
`
const ListStyled = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`
const ItemListStyled = styled.nav`
  cursor: pointer;
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  font-weight: ${({ active }) => active ? '500' : '0'};
  color: ${({ active }) => active ? 'var(--primary)' : 'initial'};
`
function Nav() {
  const dispatch = useDispatch();
  const country = useSelector(state => state.getIn(['feed', 'country']));
  const handleClick = (selectedCountry) => {
    if (selectedCountry !== country) {
      dispatch(actionsCreators.setNewsCountry(selectedCountry));
      dispatch(actionsCreators.fetchCountryFeed());
      dispatch(push({
        pathname: '/'
      }))
    }
  }

  return (
    <NavStyled>
      <ListStyled>
        <Link to={{ pathname: '/' }}>News</Link>
        <ItemListStyled onClick={() => handleClick('ar')} active={country === 'ar'}>Argentina</ItemListStyled>
        <ItemListStyled onClick={() => handleClick('us')} active={country === 'us'}>USA</ItemListStyled>
        <ItemListStyled onClick={() => handleClick('mx')} active={country === 'mx'}>Mexico</ItemListStyled>
      </ListStyled>
    </NavStyled>
  )
}

export default Nav
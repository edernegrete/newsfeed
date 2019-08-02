import React from 'react';
import styled from 'styled-components';
import moment from 'moment'
import { Link } from 'react-router-dom';
const RowStyled = styled.div`
  display: flex;
  border: 0.1rem solid var(--primary);
  cursor: pointer;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TitleStyled = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;
const DetailStyled = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-top: 1rem;
  color: var(--secondary);
`;
const InfoStyled = styled.div`
  margin: 0 1rem;
`;
const DateStyled = styled.p`
  margin-top: 1rem;
  font-size: 0.4rem;
  color: var(--secondary);
`;
function ListRow({
  title,
  description,
  image,
  date,
  url
}) {
  return (
    <Link to={{ pathname: url }}>
      <RowStyled>
          <figure>
            <img src={image} alt="" width="200px" height="150px"/>
          </figure>
          <InfoStyled>
            <TitleStyled>{title}</TitleStyled>
            <DetailStyled>{description}</DetailStyled>
            <DateStyled>Published: {moment(date).format('LLLL')}</DateStyled>
          </InfoStyled>
      </RowStyled>
    </Link>
  );
}

export default ListRow;

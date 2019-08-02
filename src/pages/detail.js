import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators } from '../store/feed';
import { push } from 'react-router-redux';
import styled from 'styled-components';
const ContentStyled = styled.div`
  > * {
    margin: 1rem 0;
    text-align: center;
  } 
`

function Detail({match}) {
  const dispatch = useDispatch();
  const news = useSelector(state => state.getIn(['feed', 'news']));
  const detail = useSelector(state => state.getIn(['feed', 'detail']));
  useEffect(() => {
    if(news.size) {
      dispatch(actionsCreators.getArticle(match.params.id))
    } else {
      dispatch(push({
        pathname: '/'
      }))
    }
  });
  return (
    <article>
      {detail && 
      <ContentStyled>
        <h3>{detail.get('title')}</h3>
        <figure>
          <img src={detail.get('urlToImage')} alt="" width="200px" height="150px"/>
        </figure>
        <p>{detail.get('content')}  <a href={detail.get('url') }> Read More </a></p>
        <p>by {detail.get('author')}</p>
      </ContentStyled>
    }
      
    </article>
  );
}

export default Detail;

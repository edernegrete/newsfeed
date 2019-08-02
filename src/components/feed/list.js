import React from 'react';
import styled from 'styled-components';
import ListRow from './list-row';

const ListSstyled = styled.div`
  margin: 1rem;
`;

function List({ data }) {
  return (
    <ListSstyled>
      {
        data.map(item => <ListRow 
          key={item.get('id')} 
          date={item.get('publishedAt')} 
          description={item.get('description')}
          title={item.get('title')}
          image={item.get('urlToImage')}
          url={`detail/${item.get('id')}`}
        />)
      }
    </ListSstyled>
  );
}

export default List;

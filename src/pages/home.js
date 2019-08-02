import React, { useEffect } from 'react';
import List from '../components/feed/list';
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreators } from '../store/feed';

function Home() {
  const dispatch = useDispatch();

  const stories = useSelector(state => state.getIn(['feed', 'news']));
  useEffect(() => {
    if(!stories.size) dispatch(actionsCreators.fetchFeed());
  }, []);
  return (
    <section>
      <List data={stories}/>
    </section>
  );
}

export default Home;

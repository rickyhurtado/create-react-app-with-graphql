import React from 'react';

import Page from '../../containers/page/Page';
import PostsList from '../../components/posts-list/PostsList';

function Posts() {
  return (
    <Page title="Posts">
      <PostsList />
    </Page>
  );
}

export default Posts;

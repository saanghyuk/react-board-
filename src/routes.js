import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import PostsIndex from './components/post_index';
import PostNew from './components/posts_new';
import PostsShow from './components/post_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="/posts/new" component={PostNew}></Route>
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);

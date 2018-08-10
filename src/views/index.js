import { h } from 'preact'
import { Router } from 'preact-router';

import Home from './pages/home';
import Layout from './tags/layout';
import Article from './pages/article';
import Error404 from './pages/errors/404';
import Credit from './pages/credit';
import News from './pages/news';
import Profile from './pages/profile';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });

export default (
	<Layout>
		<Router onChange={ onChange }>
			<Home path="/" />
			<News path="/news" />
			<Article path="/news/:title" />
			<Credit path="/credit" />
      <Profile path="/profile"/>
			<Error404 default />
		</Router>
	</Layout>
);

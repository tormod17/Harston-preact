import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

export default function (props) {
	const title = props.title;
	return (
		<div className="page page__article">
			<Card>
				<h1>{ title }: <small>A killer story</small></h1>
				<Link href="/blog" className="back">Back to Blog</Link>
			</Card>
		</div>
	);
}

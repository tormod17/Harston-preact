import { h } from 'preact';
import Card from '../tags/card';
import { parseHTML } from '../../utility/utility';

export default function (props) {
    const { title, content } = props;
    const html = content
    const parsedContent = parseHTML(content.rendered)
    return (                    
        <div class="post-holder">
            <div class="">
                <h2 class="mb40"><a href="#">{title.rendered}</a></h2>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pdt20">
                        <div class="meta">
                            <span class="meta-date">25 Dec, 2020</span>
                            <span>|</span>
                            <span class="meta-admin">By <a href="#">Admin</a></span>
                            <span>|</span>
                            <span class="meta-comments">08 comments</span>
                        </div>
                        <p>{parsedContent}</p>   
                        <a href="#" class="btn btn-primary btn-xs">read more</a>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="post-img">
                            <a href="#" class="imghover">
                              <img src="./img/post-big-1.jpg" alt="" class="img-responsive"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { h, render, Component } from 'preact';
import Card from '../tags/card';
import Post from './post'

class Posts extends Component {
    constructor() {
        super();
        // set initial time:
        this.state.time = Date.now();
    }

    componentDidMount() {
        const self = this;
        // update time every second
        $.get(`${process.env.URL}/wp-json/wp/v2/posts/?categories=5`, function(data, status){
            self.setState({
                posts: data,
            })
        })

    }
    render(props, state){
        return (
            <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                {!state.posts && <div class="loader"><div> loading .... <i class="fa fa-spinner" style="font-size:48px;"></i></div></div> }
                {state.posts && state.posts.map(p => <Post {...p} />) }
                <div class="st-pagination">
                    <ul class="pagination">
                        <li><a href="#" aria-label="previous"><span aria-hidden="true">Previous</span></a> </li>
                        <li class="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li> <a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a> </li>
                    </ul>
                </div>
            </div>                    
        )
    }
}

export default Posts;
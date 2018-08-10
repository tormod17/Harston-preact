import { h, render, Component } from 'preact';
import { Link } from 'preact-router';
import Review from './review';

//http://localhost:8888/harstonandco/wp-json/wp/v2/posts?categories=4
class Reviews extends Component {

  constructor() {
      super();
  }

  componentDidMount(){
    const self = this;
    $.get(`${process.env.URL}/wp-json/wp/v2/posts?categories=4`, function(data, status){
        const { acf } = data;
        self.setState({
          reviews: data
        })
    })
  }

  render(props, state){
    const { reviews } = state;
    return (
      <div id="services" class="space-medium bg-light">
          <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="section-title">
                        <h1>Happy clients</h1>
                        <p>Donec ut dui justonvel libero cursus facilisis exsed luct felis.</p>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="">
                  { reviews && reviews.map(r => <Review {...r.acf}/> ) }
                </div>
            </div>
        </div>
      </div>
      )
  }
}


export default Reviews;
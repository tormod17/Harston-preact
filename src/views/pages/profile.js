import { h, render, Component } from 'preact';
import Card from '../tags/card';
import CardLink from '../tags/card-link';
import Posts from '../posts/posts';
import AboutUs from '../aboutUs/aboutus';
import Team from '../team/team';

class Profile extends Component {

  constructor() {
      super();
  }

  componentDidMount(){
    const self = this;
    $.get(`${process.env.URL}/wp-json/wp/v2/pages/2`, function(data, status){
        const { acf } = data;
        self.setState({
            company: {
              aboutus: acf.company_aboutus,
              name: acf.company_name,
              image: acf.company_image
            }
        })
    })
  }
  render(props, state) {
    const { company } = state;
    return (
      <div>
        <div class="page-header">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                      <div class="page-section">
                          <h1 class="page-title">Profile</h1>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-6 hidden-xs">
                      <div class="page-breadcrumb">
                          <ol class="breadcrumb">
                              <li><a href="#">Home</a></li>
                              <li>Profile</li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="page page__blog">
          <div class="content">
              <div class="container">
                <div class="row">
                  {company && <AboutUs {...company} /> }
                  <Team />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;

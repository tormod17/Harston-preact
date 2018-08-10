import { h, render, Component } from 'preact';
import { Link } from 'preact-router';
import Member from './member';

//http://localhost:8888/harstonandco/wp-json/wp/v2/posts?categories=4
class Team extends Component {

  constructor() {
      super();
  }

  componentDidMount(){
    const self = this;
    $.get(`${process.env.URL}/wp-json/wp/v2/posts?categories=6`, function(data, status){
        self.setState({
          team: data
        })
    })
  }

  render(props, state){
    const { team } = state;
    return (
    <div>
        <div class="space-medium bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h2>My team members</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    { team && team.map(m => <Member {...m.acf}/>)}
                </div>
            </div>
        </div>
        <div class="space-medium">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb40">
                        <div class="section-title">
                            <h2>Team service areas</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="team-area">
                            <ul class="map-icon map-pin">
                                <li>Mumbai</li>
                                <li>Delhi</li>
                                <li>Banglore</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="team-area">
                            <ul class="map-icon map-pin">
                                <li>Ahmedabad</li>
                                <li>surat</li>
                                <li>pune</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="team-area">
                            <ul class="map-icon map-pin">
                                <li>jaipur</li>
                                <li>lucknow</li>
                                <li>vadodara</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="team-area">
                            <ul class="map-icon map-pin">
                                <li>Hyderabad</li>
                                <li>Rajkot</li>
                                <li>Agra</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}


export default Team;
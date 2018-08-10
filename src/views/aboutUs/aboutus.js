import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  return (
      <div id="profile" class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="profile-pic">
                      <img src={props.image} alt="" class="img-responsive"/>
                    </div>
                </div>
                <div class="col-lg-offset-1 col-lg-7 col-md-offset-1 col-md-7 col-sm-8 col-xs-12">
                    <div class="profile-description">
                        <h2>I am a real estate broker</h2><span class="profile-meta">{props.name}</span>
                        <p class="lead">{props.aboutus}</p>
                        <a href="#" class="btn btn-primary">More About Me</a> &nbsp; <a href="#" class="btn btn-default">+180 - 123 - 4567</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
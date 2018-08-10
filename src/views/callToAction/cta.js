import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  return (
     <div class="cta-wrapper">
      <div class="container">
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="cta-title">{props.title}</h1>
                <p class="mb30">{props.subtitle}</p>
                <a href="#" class="btn btn-default btn-lg">{props.button}</a></div>
          </div>
      </div>
    </div>
  )
}
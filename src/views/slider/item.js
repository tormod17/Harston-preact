import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  return (
        <div class={`item ${props.class}`} style={`width: ${props.width}`}>
            <div class="slider-img"> 
              <img src={props.image} alt=""/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="slider-captions">
                            <h1 class="slider-title">{props.title}</h1>
                            <p class="slider-text hidden-xs">{props.subtitle}</p>
                            <a href="#" class="btn btn-primary btn-lg hidden-sm hidden-xs">{props.button}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )       
}
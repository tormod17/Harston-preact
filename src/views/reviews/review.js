import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  return (
    <div class="item">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="testimonial-block">
                <div class="testimonial-content">
                    <p>{props.review_post_quote}</p>
                </div>
                <div class="testimonial-user-block">
                    <div class="testimonial-img mb20">
                        <img src={props.review_post_image} alt="" class="img-circle"/>
                    </div>
                    <div class="testimonial-meta">
                        <h5 class="testimonial-title">{props.review_post_name}</h5>
                        <p class="testimonial-address-text">{props.review_post_address}</p>
                        <div class="star-rating">
                          { new Array(Number(props.review_post_ratings[0].split(':')[1].trim())).fill(
                                <span><i class="fa fa-star"></i></span>)
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

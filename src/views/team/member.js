import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  const { email, name , position, image} = props;
  return (
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="team-block">
            <div class="caption-style-1">
                <div class="style-1">
                    <img src={image} alt="" class="img-responsive"/>
                    <div class="caption">
                        <div class="blur"></div>
                        <div class="caption-text">
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-content">
                <h3 class="team-title">{name}</h3>
                <span class="team-meta">{position}</span>
            </div>
        </div>
    </div>
  );
}

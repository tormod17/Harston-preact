import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  const { address, phone, email, aboutus } =props;
  let letter;
  return (
      <div>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="footer-widget">
                            <div class="">
                                <h3 class="footer-title">About Us</h3>
                                <p>{aboutus}</p>
                                <div class="ft-social">
                                    <span><a href="#" class="btn-social btn-facebook" ><i class="fa fa-facebook"></i></a></span>
                                    <span><a href="#" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a></span>
                                    <span><a href="#" class="btn-social btn-googleplus"><i class="fa fa-google-plus"></i></a></span>
                                    <span><a href="#" class=" btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-widget">
                            <h3 class="footer-title">Contact Info</h3>
                            <div class="info-widget">
                                <div class="info-icon"><i class="fa fa-map-marker"></i></div>
                                <div class="info-text">
                                    <h4 class="info-title">Office Address</h4>
                                    <p>{address}</p>
                                </div>
                            </div>
                            <div class="info-widget">
                                <div class="info-icon"><i class="fa fa-phone"></i></div>
                                <div class="info-text">
                                    <h4 class="info-title">Phone Call</h4>
                                    <p>{phone}
                                    <br/>{phone} </p>
                                </div>
                            </div>
                            <div class="info-widget">
                                <div class="info-icon"><i class="fa fa-envelope"></i></div>
                                <div class="info-text">
                                    <h4 class="info-title">Email Me</h4>
                                    <p>{email} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-2 col-md-2 col-sm-6 col-xs-12">
                        <div class="footer-widget">
                            <h3 class="footer-title">Quick Links</h3>
                            <ul class="arrow arrow-right">
                                <li><Link href="/">home</Link></li>
                                <li><Link href="/profile">Profiles</Link></li>
                                <li><Link href="/news">News</Link></li>
                                <li><Link href="/">Properties</Link></li>
                                <li><Link href="/">Services</Link></li>
                                <li><Link href="/">contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    { letter && 
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-widget">
                            <h3 class="footer-title">
                                Signup Newsletter
                            </h3>
                            <div class="newsletter-section">
                                <form>
                                    <div class="newsletter-form">
                                        <p>Signup my newsletter for new information of properties.</p>
                                        <input type="text" class="form-control mb20" placeholder="Search Here"/>
                                        <button type="Submit" class="btn btn-primary btn-xs">subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div class="tiny-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p class="mute-text">
                            <a href="https://easetemplate.com/" target="_blank" class="copyrightlink">Design by Tormod Smith</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}

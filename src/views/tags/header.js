import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {

	return (
    <div class="header-wrapper navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="top-bar">
                    <div class="col-lg-6 col-md-4 hidden-sm hidden-xs">
                        <p class="top-text">    </p>
                    </div>
                    <div class="col-lg-6 col-md-8 col-sm-12 hidden-xs">
                        <ul>
                            <li class="pdr40">
                                <span class="top-bar-icon"><i class="fa fa-phone"></i></span><span class="top-text">{props.phone}</span></li>
                            <li class="pdr40">
                                <span class="top-bar-icon"><i class="fa fa-envelope"></i></span><span class="top-text">{props.email}</span> </li>
                            <li>
                                <div class="social-icon">
                                    <span><a href="#" class="btn-social btn-facebook" ><i class="fa fa-facebook"></i></a></span>
                                    <span><a href="#" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a></span>
                                    <span><a href="#" class="btn-social btn-googleplus"><i class="fa fa-google-plus"></i></a></span>
                                    <span><a href="#" class=" btn-social btn-linkedin"><i class="fa fa-linkedin"></i></a></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navigation">
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                    <div class="logo">
                        <a href="/">
                            <img src="/svgs/desktop-logo.svg" alt="" class="header-logo"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                    <div id="navigation">
                        <ul>
                            <li class="active">
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <a href="https://realla.co/organisations/8615/listings">Properties</a>
                            </li>
                            <li>
                                <Link href="/news">News</Link>
                            </li>
                            <li>
                                <a href="/">Services</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
	)
}

import { h } from 'preact';
import Card from '../tags/card';
import CardLink from '../tags/card-link';
import Posts from '../posts/posts';

export default function (props) {
	return (
		<div>
		  <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                    <div class="page-section">
                        <h1 class="page-title">News</h1>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 hidden-xs">
                    <div class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li>News</li>
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
	                <Posts />
	                <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                    <div class=" widget widget-search">
                        <form>
                            <div class="search-form">
                                <input type="text" class="form-control" placeholder="Search Here" />
                                <button type="Submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class=" widget widget-categories">
                        <h2 class="widget-title">Categories</h2>
                        <ul class="arrow arrow-right">
                            <li class="active"><a href="#"> Buying</a></li>
                            <li><a href="#">Selling</a></li>
                            <li><a href="#">Real Estate Broker</a></li>
                            <li><a href="#">Free Website Template</a></li>
                        </ul>
                    </div>
                    <div class=" widget widget-tags ">
                      <h2 class=" widget-title">Tags</h2>
                      <a href="#">Real estate template</a><a href="#">template</a><a href="#">website template</a><a href="#">home sale</a><a href="#">Free template </a>
                    </div>
	              </div>
		        </div>
		    </div>
		    </div>
			</div>
	  </div>
	);
}

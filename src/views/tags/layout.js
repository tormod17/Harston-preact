import { h, render, Component } from 'preact';
import Header from './header';
import Footer from './footer';

class Layout extends Component {

  constructor() {
    super();
  }

  componentWillUpdate(){
   // this.createScript()
  }

  componentDidMount(){
    const self = this;
    $.get(`${process.env.URL}/wp-json/wp/v2/pages/2`, function(data, status){
        const { acf } = data;
        self.setState({
            company: {
              phone: acf["company_phone"],
              email: acf["company_email"],
              address: acf["company_address"],
              aboutus: acf["company_aboutus"]
            }
        })
    })
  }

  createScript(){
    ["js/jquery.min.js",
    "js/bootstrap.min.js",
    "js/menumaker.js",
    "js/navigation.js",
    "js/owl.carousel.min.js",
    "js/multiple-carousel.js",
    "js/owl.carousel.min.js",
    "js/multiple-carousel.js",
    "js/jquery.isotope.min.js"].forEach(path => {
        const tag = document.querySelector('[src="'+path  +'"]');
        tag && tag.remove();
        const script = document.createElement("script");
        script.src = path
        script.async = true;
        document.body.appendChild(script);
    })
  }

  render (props, state){
  	return (
  		<div id="">
  			<Header {...state.company} />
  			<main id="">
  				{ props.children }
  			</main>
        <Footer {...state.company} />
  		</div>
  	);
  }
}
export default Layout;
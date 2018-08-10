
import { h, render, Component } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import Slider from '../slider/slider';
import Reviews from '../reviews/reviews';
import CallToAction from '../callToAction/cta';
import AboutUs from '../aboutUs/aboutus';
import { parseHTML } from '../../utility/utility';

class Home extends Component {

  constructor() {
      super();
  }

  componentDidMount(){
    const self = this;
    $.get(`${process.env.URL}/wp-json/wp/v2/pages/2`, function(data, status){
        const { acf } = data;
        const slideImages = [acf["slide-image-1"], acf["slide-image-2"], acf["slide-image-3"]]
        debugger
        self.setState({
            slider:   self.createSlideContent(acf.slide_content, slideImages),
            cta: {
              ...self.createCTA(acf.cta_content)
            },
            company: {
              aboutus: acf.company_aboutus,
              name: acf.company_name,
              image: acf.company_image
            }
        })
    })
  }

  createSlideContent(slide_content, images){
    const slideArr = parseHTML(slide_content).split('&&&');
    const slides = slideArr.map((slide,index) => {
      const texts = slide.split(',');
      return {
        title: texts[0],
        subtitle: texts[1],
        button: texts[2],
        image: images[index],
      }
    })
    return slides;
  }


  createCTA(cta){
    const texts = parseHTML(cta).split(',');
    return {
      title: texts[0],
      subtitle: texts[1],
      button: texts[2],
    }
  }

  render (props, state){
    const { slider, cta, company } = state;
    return (
      <div>
        {!slider && <div class="loader"><div> loading .... <i class="fa fa-spinner" style="font-size:48px;"></i></div></div> }
        {slider && company && cta &&
          <div id="home" class="page__home" >
            <Slider slider={slider} width={window.innerWidth} />
            <AboutUs {...company} /> 
            <Reviews />
            <CallToAction {...cta} />
          </div>
        }
      </div>
    );    
  }
}


export default Home;


import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';
import Item from './item';

class Slider extends Component {
  
  constructor(props){
    super(props);
    let classes = this.props.slider.map(c => '');
    classes[0]= 'active';
    this.state = {
      class: classes,
      width: props.width,
      selected: 0,
    }
    const sliding = setInterval((s)=> {
      this.prev();
    }, 4000)
  }

  updateActiveClass(newSelected){
    const s = document.querySelector('.squares .active');
    s.classList.remove('active');
    const a = document.querySelector(`.squares div:nth-of-type(${newSelected + 1})`)
    a.classList.add('active');
  }

  prev = e => {
    const { selected } = this.state;
    const slideNumber = this.props.slider.length;
    let newSelected;
    let temp = selected + 1;
    if (temp < slideNumber) {
      newSelected = temp;
    } else {
      newSelected = 0;
    }
    
    this.setState({
      selected: newSelected,
    })
    //this.updateActiveClass(newSelected);
  }

  next = e => {
    const { selected } = this.state;
    const slideNumber = this.props.slider.length;
    let newSelected;
    let temp = selected - 1;
    if (temp >= 0 ) {
      newSelected = temp;
    } else {
      newSelected = slideNumber - 1;
    }
    this.setState({
      selected: newSelected,
    })
   // this.updateActiveClass(newSelected);
  }

  render(props, state){
    const sliderWidth = props.slider.length * state.width +'px';
    const move = - 1 * state.width * state.selected;
    const itemsStyle = {
      transform: `translate3d(${move}px, 0px, 0px)`,
      width: sliderWidth,
    }

    return (
      <div class="slider">
        <div class="frame">
          <div class="items" style={itemsStyle} >
            { props.slider.map((slide, i) => {
                slide.width = state.width + 'px';
                return (
                  <Item class={state.class[i]} {...slide} />
                )
              })
            }
          </div>
          <div class="control">
            <div class="prev" onclick={this.prev}>
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="next" onclick={this.next}>
              <i class="fa fa-angle-right"></i>
            </div>
          </div>
          <div class="squares">
            { props.slider.map((slide, i) => {
                const squareClass = i === 0 ? 'active' : '';
                return (
                    <div class={squareClass}>
                      <span></span>
                    </div>
                  )
              })
            }
          </div>
        </div>
      </div>
    )       
  }
}

export default Slider;

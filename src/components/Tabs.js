import  React, {Component}  from  'react';
import CoolTabs from 'react-cool-tabs';
import Sidenav from "./Sidenav";
import Image2 from "../Images/Image2.png"
import Image1 from "../Images/Image1.png"

class Content1 extends Component {
  render() {
    return <div>
        <h4>Perfect Template for your Business</h4>
		<p>A versatile and dynamic template perfect for promoting your business and services.  </p>
	   <img src={Image2} alt='' style={{}} />
	   <h4>Smooth Animations</h4>
	   <p>You can see beautiful animations all across Business template. They makes it feels live and pleasure to use. To learn more about how to use interactions in this template, check out Interactions Video Course.</p>
	   <div className="sidenav" style={{paddingTop:"200px", marginBottom:"30px", width:"100%"}}>
	      <Sidenav />
	   </div>
	    
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div>
      <h4>CMS for Your Business</h4>
	  <p>Use the power of Webflow CMS to add dynamic content. The whole structure is configured and ready to go. Learn more about Webflow CMS.</p>
      <h4>100% Customizable</h4>
	  <p>Feel like changing something in the template? All our templates were built using Webflow without writing code. That means you can customize them using our visual interface too. Learn more about how to customize your template at Webflow University</p>
	  <h4>Forms</h4>
	  <p>Business template comes with forms perfectly styled and very easy to customize. Learn more about Forms.</p>
	  <img src={Image1} alt="" />
	</div>
  }
}


export  default  class  Tabs  extends  React.Component {
render() {
   return (
     <div>
	     <CoolTabs
	       tabKey={'1'}
	       style={{ width:  "100%", height:  "1200px", background:  'white' }}
	       activeTabStyle={{ background:  'white', color:  'black' }}
	       unActiveTabStyle={{ background:  'white', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'white', height:  4 }}
	       leftContentStyle={{ background:  'white' }}
	       rightContentStyle={{ background:  'white' }}
	       leftTabTitle={'Overview'}
	       rightTabTitle={'License'}
	       leftContent={<Content1/>}
		   rightContent={<Content2/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>
);
}}
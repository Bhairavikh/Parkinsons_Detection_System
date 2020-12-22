import React,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap'
import Image from 'react-bootstrap/Image'
import image1 from '../Images/precautions.jpeg'
import homesafetytips from '../Images/homesafetytips.jpg'


class Main extends Component{
    render(){
        return(
            <Container>
                <center>
                  <h2 style={{color:'#172D02 ',marginTop:"20px"}}>Precautions To Be Taken:</h2>
                   <Col md={12} xs={12}>
                  <Image src={image1} style={{height:"300px",width:"600px",marginTop:"20px",marginBottom:"20px"}}thumbnail />
                  </Col>
                   </center>
             <b>Parkinson’s Disease (PD)</b> is a central nervous system disorder in which the region of the brain that 
             controls movement deteriorates. This neural deterioration results in decreased dopamine levels, the 
             brain chemical that controls coordinated movement.<br /><br />

             Dopamine plays a major role in a variety of mental and physical functions, including:<br /><br />
        
        <ul style={{ listStyleType: "circle" }}>
          <li>Voluntary movement</li>
          <li>Cognition</li>
          <li>Mood</li>
          <li>Memory</li>
          <li>General behavior</li>

        </ul>
            
        <h3> <span className="fa fa-angle-double-right"></span> Foods to eat</h3>
<h5>Antioxidants</h5>
Current research focuses on proteinsTrusted Source, flavonoids, and gut bacteriaTrusted Source.
 In the meantime, eating a diet high in antioxidants reduces “oxidative stress” that aggravates 
 Parkinson’s and similar conditions, according to the Michael J. Fox Foundation for Parkinson’s research.
<br /><br />
You can get lots of antioxidants by eating:
<br /><br />

  <ul style={{ listStyleType: "circle" }}>
          <li>tree nuts, like walnuts, Brazil nuts, pecans, and pistachios</li>
          <li>blueberries, blackberries, goji berries, cranberries, and elderberries</li>
          <li>tomatoes, peppers, eggplant, and other nightshade vegetables</li>
          <li>spinach and kale</li>
          

        </ul>

<br />
Eating a plant-based diet high in these types of foods may provide the highest antioxidant intake.<br /><br />

<h4>Fava beans</h4>
Some people eat fava beans for Parkinson’s because they contain levodopa — the same ingredient in some 
drugs used to treat Parkinson’s. There’s no definitive evidence supporting fava beans as a treatment at this time. <br /><br />

<h4>Omega-3s</h4>
If you’re concerned about secondary symptoms of Parkinson’s, like dementia and confusion, get serious about consuming
more salmon, halibut, oysters, soybeans, flax seed, and kidney beans. SoyTrusted Source in particular is being studied 
for its ability to protect against Parkinson’s. These foods contain omega-3 fatty acids, which might improveTrusted Source 
cognitive function.<br /><br />


<h3><span className="fa fa-angle-double-right"></span> Foods to avoid</h3>
<h4>Dairy products</h4>
Dairy products have been linkedTrusted Source to a risk of developing Parkinson’s. Something in dairy products might 
negatively impact the oxidation levels in your brain, making symptoms more persistent. This effect was shown to be stronger 
in men than in women and not seen in those supplementing with calcium.<br /><br />

If you’re going to stop consuming dairy products like milk, cheese, and yogurt,
 you might want to consider a calcium supplement to make up for the loss of calcium in your diet. However, 
 low calcium intake doesn’t necessarily equal poor bone health, as seen in countries with low dairy and calcium consumption.
<br /><br />

<h4>Foods high in saturated fat</h4>
The role that foods high in saturated fats play in Parkinson’s progression is still under investigationTrusted Source and 
is often conflicting. We might eventually discover that there are certain types of saturated fats that actually help people 
with Parkinson’s.
<br /><br />
Some limited research does show that ketogenic, low-protein diets were beneficial for some with Parkinson’s.
 Other research finds high saturated fat intake worsened risk.
<br />
But in general, foods that have been fried or heavily processed alter your metabolism, increase blood pressure, 
and impact your cholesterol. None of those things are good for your body, especially if you’re trying to treat Parkinson’s.
<br /><br />

<h2><span className="fa fa-angle-double-right"></span> <u> 7 Home Safty Tips </u></h2>
<Row>
<Col md={12} xs={12}>
      
          <Image src={homesafetytips} style={{borderRadius: 50 + 'px',height:'300px',width:"500px"}} thumbnail />

  </Col>
</Row>
<br />
1. Start with small changes, like getting rid of potential obstacles on the floor such as throw rugs and extension cords.
 Leave plenty of space between pieces of furniture, and create a clear path through your home.
 <br /><br />
 2. Tackle the bathroom. Start by getting rid of bath mats that may slip, and add a non-slip mat to the shower or bath tub. 
 <br /><br />
3. Add more lights around the house. Light makes navigation easier and can also boost mood, one commenter noted. Touch 
lights and lights that respond to sound also help.
<br /><br />
4. If it's in your budget, install railings along walls and hallways to help with balance and prevent falls.
<br /><br />
5. Invest in chairs that are easier to get out of, such as adjustable recliners or chairs with straight backs, 
firm seats and arm rests. Firm cushions can add height and help with standing, as well.
<br /><br />
6. Consider making more significant renovations, if your budget allows, such as building ramps, stair lifts and
 wider doorways. Medicare covers different types of portable medical equipment, but not permanent installations.
 <br /><br />
 7. Besides practicality, also make adjustments for comfort. One commenter even found a way to help her two 
 Yorkies sleep better, too, after her husband started acting out his dreams.
 
   </Container>
        );
    }
}
export default Main;


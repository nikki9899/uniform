import Button from "./atoms/button";

const AboutUs = (props) => {
  return (
    <div className="py-20 mx-auto max-w-screen-md text-center ">
      <h3 className="text-7xl font-medium mb-2">About us</h3>
      <h4 className=" text-3xl leading-relaxed py-6">Your Uniform Experts Since 2000: Elevating Style and Professionalism for Businesses and Schools.</h4>
      <div className ="py-3" >

    
      <Button 
    
      rounded="semi"
              variant="primary" >
                <h5 className="text-2xl font-light">
                learn more
                </h5>
              </Button>
              </div>
    </div>

  );
};
export default AboutUs;

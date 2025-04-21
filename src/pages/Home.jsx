
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import LawyerContainer from '../components/LawyerContainer';


const Home = () => {

    const data = useLoaderData();
   
    
    return (
        <div>
            <Hero></Hero>
            <LawyerContainer lawyers={data}></LawyerContainer>

            
            
        </div>
    );
};

export default Home;
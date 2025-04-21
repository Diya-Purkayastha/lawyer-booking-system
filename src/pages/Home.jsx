
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import LawyerContainer from '../components/LawyerContainer';
import HomeCounter from '../components/HomeCounter';


const Home = () => {

    const data = useLoaderData();
   
    
    return (
        <div>
            <Hero></Hero>
            <LawyerContainer lawyers={data}></LawyerContainer>
            <HomeCounter></HomeCounter>
            
        </div>
    );
};

export default Home;
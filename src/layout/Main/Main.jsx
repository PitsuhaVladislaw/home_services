import './Main.css';
import ProfServises from './ProfServises/ProfServises';
import OurServices from './OurServices/OurServices';
import Blog from './Blog/Blog';
import Review from './Review/Review';

const Main = () => {
    return(
        <main style={{margin: '0 auto'}}>
            <ProfServises />
            <OurServices />
            <Review />
            <Blog />
        </main>
    )
}

export default Main;
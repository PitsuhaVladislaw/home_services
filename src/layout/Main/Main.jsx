import './Main.css';
import ProfServises from './ProfServises/ProfServises';
import OurServices from './OurServices/OurServices';

const Main = () => {
    return(
        <main style={{margin: '0 auto'}}>
            <ProfServises />
            <OurServices />
        </main>
    )
}

export default Main;
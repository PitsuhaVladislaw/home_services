import { HiPhone } from 'react-icons/hi2'
import { Button } from 'react-bootstrap'

export default function ButtonPage() {
    return(
        <Button>
            <h6>Call Us Now</h6>
            <div>
                <HiPhone className='imgPhone' />
            </div>
        </Button>
    )
}
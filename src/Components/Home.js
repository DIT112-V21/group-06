import '../Css/CarControl.css'
import Button from './Button'
import { Link } from 'react-router-dom'


function Home() {

  return (
      <header className="CarControl-header">
        <p>
          Group06 :)))
          <Link to="/logIn">    
         <Button text='bazonk' color='blue' className='btn'/>
          </Link>
          </p>
      </header>
  )
}

export default Home;

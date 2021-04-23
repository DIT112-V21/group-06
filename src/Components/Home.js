import '../Css/CarControl.css'
import Button from './Button'
import { Link } from 'react-router-dom'


function App() {

  return (
      <header className="CarControl-header">
        <p>
          Group06 :)))
          <Link to="/carcontrol">    
         <Button text='bazonk' color='blue' className='btn'/>
          </Link>
          </p>
      </header>
  )
}

export default App;
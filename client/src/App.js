import React from 'react'
import Fib from './Fib'
import OtherPage from './OtherPage'
import {BrowserRouter,  Route} from 'react-router-dom'
const App =()=>{
  return(
    
      <BrowserRouter>
          
          <Route path="/otherpage" component={OtherPage}/>
          <Route exact path="/" component={Fib}/>
            
      </BrowserRouter>
   
  )
}
export default App;
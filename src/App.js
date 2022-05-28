import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,actions,trending,comedy} from './urls'
function App() {
   return(
     <div className='App'>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={actions} title='Action' isSmall />
        <RowPost url={trending} title='Trending' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
     </div>
   )
}

export default App;

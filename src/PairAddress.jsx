import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home2 from './Home2'
import Footer from './Footer'

function PairAddress(props) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [data,setData] = useState([]);
  const [validate,setValidate] = useState(0);
  

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const setDataSets = (element) => {
    console.log('props passed')
    props.setDataSets(element)
    setData(element)
    setTimeout(()=>{
      setValidate(prev=> 1-prev);
    },500)
    // setValidate(true);
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} setDataSets={setDataSets} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {validate>0 && <Home2 data={data} />}
      {validate==0 && <Home2 data={data} /> }
      <Footer/>
    </div>
  )
}

export default PairAddress

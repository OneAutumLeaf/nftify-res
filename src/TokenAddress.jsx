import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Footer from './Footer'

function TokenAddress(props) {
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

  const [remResp,setRemResp] = useState([]);

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} setDataSets={setDataSets} setRemResp={setRemResp} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {validate>0 && <Home data={data} remResp={remResp} />}
      {validate==0 && <Home data={data} /> }
      <Footer/>
    </div>
  )
}

export default TokenAddress

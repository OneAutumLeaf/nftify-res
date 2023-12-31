import { BsJustify } from "react-icons/bs";
import { useState,useRef } from "react";
import axios from "axios";

function Header({ OpenSidebar,setDataSets,setRemResp }) {

  const searchRef = useRef('');

  const EnterHandler =async (e) => {
    // console.log(e)
    if (e.key == "Enter") {
      
      // await axios.get("").then((res) => {
      console.log(window.location.href)

      if (window.location.href == "https://nftify-ayush.netlify.app/") {
        try{
          await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${searchRef.current.value}`).then((res) => {
            if(res.data.pairs && res.data.pairs.length>0){
              setRemResp(res)
              setDataSets(res.data.pairs);
              console.log(res.data.pairs)
            }else{
              setDataSets([])
            }
            searchRef.current.value = "";
          })
        }catch(err){
          alert('Please enter something valid.')
          console.log(err)
        }
        // console.log("Token Address: ");
      } else if (window.location.href == "https://nftify-ayush.netlify.app/pair") {
        // console.log("Pair Address: ");
        try{
          await axios.get(`https://api.dexscreener.com/latest/dex/pairs/bsc/${searchRef.current.value}`).then((res) => {
            if(res.data.pairs && res.data.pairs.length>0){
              setDataSets(res.data.pairs);
              console.log(res.data.pairs)
            }else{
              setDataSets([])
            }
            searchRef.current.value = "";
          })
        }catch(err){
          console.log(err)
        }
      }
    }
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
          <input
            className="search-form"
            type="search"
            placeholder="Search..."
            onKeyDown={EnterHandler}
            ref={searchRef}
          />
        
      </div>
      <div className="header-right">
        <button className="button">Connect</button>
      </div>
    </header>
  );
}

export default Header;

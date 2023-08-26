import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdOutlineToken } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

import { useState, useEffect } from "react";

function Home2(props) {
  // const filterData = props.data.slice().sort((a, b) => {
  //   a.price - b.price;
  // });
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    // console.log(props.data,' -> props.data')
    setFilterData(props.data.slice().sort((a, b) => b.priceUsd - a.priceUsd));
    // console.log(filterData, " -> filterData");
  }, []);

  return (
    <main className="main-container">
      <div style={{background:"#ffffff5e",padding:"10px"}}>
        <h3 style={{display:"inline"}} >Pair Search Results</h3>
        <p style={{ display: "inline",marginLeft:"1vw",wordBreak:"break-all" }}>( Please Enter Token Address in the search bar ) <br /><br />or you can use default token address - 0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c <br /><br /> defaul pair address - 0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae</p>
      </div>
      {filterData.length > 0 &&
        filterData.map((e, index) => {
          if (index < 10) {
            return (
              <>
                <div key={index} className="main-cards">
                  <div className="card">
                    <div className="card-inner">
                      <h3>Basic Info</h3>
                      <div>
                        <p className="card-para">Pair created at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.pairCreatedAt}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {e.baseToken.symbol}</p>
                        <p className="card-para">Dex ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.dexId}</p>
                        {/* <p className="card-para">Pair Address  {e.pairAddress}</p> */}
                      </div>
                      </div>
                      <div className="card-icon-1"><IoInformationCircleOutline className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Base Token</h3>
                      <div>
                        <p className="card-para">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.baseToken.name}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.baseToken.symbol}</p>
                        {/* <p className="card-para">Address {e.baseToken.address}</p> */}
                      </div>
                    </div>
                    <div className="card-icon-2"><MdOutlineToken className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Quote Token</h3>
                      <div>
                        <p className="card-para">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.quoteToken.name}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.quoteToken.symbol}</p>
                        {/* <p className="card-para">Address  {e.quoteToken.address}</p> */}
                      </div>
                    </div>
                    <div className="card-icon-3"><MdOutlineToken className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Price</h3>
                      <div>
                        <p className="card-para">Price Native &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.priceNative}</p>
                        <p className="card-para"> Price USD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.priceUsd}</p>
                      </div>
                    </div>
                    <div className="card-icon-4"><PiCurrencyDollarSimpleBold  className="card_icon" /></div>

                  </div>
                </div>
              </>
            );
          } else {
            return <></>;
          }
        })}
    </main>
  );
}

export default Home2;

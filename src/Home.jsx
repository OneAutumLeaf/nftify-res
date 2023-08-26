import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { MdOutlineToken } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

import { useState, useEffect } from "react";

function Home(props) {
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
      <div className="main-title">
        <h3>Token Search Results</h3>
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
                        <p className="card-para">Pair created at &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.pairCreatedAt}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {e.baseToken.symbol}</p>
                        <p className="card-para">Dex ID  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.dexId}</p>
                        {/* <p className="card-para" >Pair Address  </p> */}
                      </div>
                      </div>
                      <div className="card-icon-1"><IoInformationCircleOutline className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Base Token</h3>
                      <div>
                        <p className="card-para">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.baseToken.name}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.baseToken.symbol}</p>
                      </div>
                    </div>
                    <div className="card-icon-2"><MdOutlineToken className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Quote Token</h3>
                      <div>
                        <p className="card-para">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.quoteToken.name}</p>
                        <p className="card-para">Symbol &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.quoteToken.symbol}</p>
                      </div>
                    </div>
                    <div className="card-icon-3"><MdOutlineToken className="card_icon" /></div>
                  </div>
                  <div className="card">
                    <div className="card-inner">
                      <h3>Price</h3>
                      <div>
                        <p className="card-para">Price Native &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {e.priceNative}</p>
                        <p className="card-para"> Price USD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e.priceUsd}</p>
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

export default Home;

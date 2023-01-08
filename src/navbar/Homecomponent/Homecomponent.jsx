import React from "react";


const Homecomponent = () => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
  let date = new Date();
  let currdate =
     month[date.getMonth()] + " " + date.getDate()+ " " +date.getFullYear() 
  console.log(currdate);
  return (
    <>
      <div className="homebox">
        <div className="homebox1">
          <div className="homebox1img1">
            <p className="homebox1img1-p1">TITLE OF VERTICAL GALLREY</p>
            <p className="homebox1img1-p2">RUBIXE/{currdate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecomponent;

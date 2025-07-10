import Price from "./price";
import "./Product.css";





 
function Product({ title, idx }) {
  
  // let style = { color: 'pink' }

  let   oldPrice=["12,30", "650", "730", "12000"]
  let   newprice=["1330", "1525", "16320", "1880"]
    let   Description= [ ["800,DPI",  "programable Bottun"],  
    [ "intuitive surface" , "designed for ipad pro" ],
     [  "designed for ipad pro", "intpuitive surface" ],
     ["wireless", "optical orintation"]]
    


  return (
    <div className="Product">
      <h3  > {title}</h3>
      <p>{Description[idx] [0]}</p>
      <p>{Description[idx] [1]}</p>
      <p>{Description[idx] [2]}</p>
      < Price oldPrice={oldPrice[idx]} newprice={newprice[idx]}  />

    </div>



  );
}

export default Product; 
import Product from "./Product.jsx";


function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "ceter",
        alignItem: "centee",
        

    }

    return (

        <div style={styles}>
           
            <Product title={"Logitech MX master"} oldprice={300} newprice={600} idx={0} />
            <Product title={"Apple Pencil(2nd gen)"} oldprice={300} newprice={600} idx={1} />
            <Product title={"Zebronic Zeb Tranformer"} oldprice={300} newprice={600} idx={2} />
            <Product title={"Peronic Toad23"} oldprice={300} newprice={600} idx={3} />







        </div>

    );
}

export default ProductTab;
export default function Price({oldPrice, newprice}) {

    let oldStyles={
        textDecorationLine: "Line-through",

    }

    let newStyles={
        fontWeight: "bold"


    }

    let styles={
        backgroundColor:" #e0c367",
        height:"70px",
        with: "250px",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        
    }
   
    return (
        <div style={styles}>
            {/* text textDecorationLine use in jsx for cuting the price  */}
            <span style={oldStyles}> old price:{oldPrice} </span> 
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>new price:{newprice}</span>
        </div>
    );

}

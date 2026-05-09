import "./box-color"

function BoxColor({r, g, b}) {
    
    return(
        <div className="box-color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <h3>rgb({r},{g},{b})</h3>
        </div>
    );
}

export default BoxColor
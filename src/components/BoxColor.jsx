

function BoxColor(props) {
    const {r,g,b } = props;
    const color = `rgb(${r},${g},${b})`;

    const style = {
        backgroundColor: color,
        width: "80vw",
        height: "120px",
        color:"white",
        fontSize:"30px",

    }
  return (
    <div style={style}>
    {color}
    
    
    </div>
  )
}

export default BoxColor
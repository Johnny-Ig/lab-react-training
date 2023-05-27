

function Random(props) {

    const {min, max} = props
    const randomNum = Math.floor(Math.random() * (max - min))
  return (
    <div><div>Random number: {randomNum}</div></div>
  )
}

export default Random
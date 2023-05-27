

function IdCard(props) {
    const {lastName, firstName, gender, heigth, birth, picture} = props
  return (
    <div className="card">
    <img src={picture} alt="image" />
    <div>
    <h4>Last Name: {lastName}</h4>
    <h4>First Name: {firstName}</h4>
    <h4>Gender: {gender}</h4>
    <h4>Heigth: {heigth}</h4>
    <h4>Birth: {birth.toDateString()}</h4>



    </div>
      
    </div>
  )
}

export default IdCard
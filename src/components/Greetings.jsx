

function Greetings(props) {
 const {lang, children} =props

  const greetings = {
    de: 'Hallo',
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour'
  }

  return (
    <div>
       {greetings[lang]}, {children}

    </div>
  )
}

export default Greetings
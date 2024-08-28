import './Greetings.css';

function Greetings(props) {
  var hello = '';
  switch (props.lang) {
    case 'de':
      hello = 'Hallo';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
    default:
      hello = 'ERROR!!';
  }

  return (
    <div id="div2">
      <p>
        {hello} {props.children}
      </p>
    </div>
  );
}

export default Greetings;

import visa from '../images/visa.png';
import master from '../images/master.png';
import './CreditCard.css';

function CreditCard(props) {
  var type = '';
  var num = props.number;
  var year = props.expirationYear - 2000;
  switch (props.type) {
    case 'Visa':
      type = visa;
      break;
    case 'Master Card':
      type = master;
      break;
  }

  num = '•••• •••• •••• ' + num.slice(-4);
  const color = {
    color: props.color,
  };
  const bgColor = {
    backgroundColor: props.bgColor,
  };

  return (
    <div style={bgColor} id="div1">
      <img className="img" src={type} alt="This is an image" />
      <p id="number" style={color}>
        {num}
      </p>
      <p id="expires" style={color}>
        Expires {props.expirationMonth}/{year}
      </p>
      <p id="owner" style={color}>
        {props.owner}
      </p>
      <p id="bank" style={color}>
        {props.bank}
      </p>
    </div>
  );
}

export default CreditCard;

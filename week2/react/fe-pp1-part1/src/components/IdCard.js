import './IdCard.css';

function IdCard(props) {
  return (
    <div id="div1">
      <img
        id="img1"
        className="my-img-class"
        src={props.picture}
        alt="This is an image"
      />
      <ul>
        <li>
          <b>First Name: </b>
          {props.firstName}
        </li>
        <li>
          <b>Last Name: </b>
          {props.lastName}
        </li>
        <li>
          <b>Gender: </b>
          {props.gender}
        </li>
        <li>
          <b>Height: </b>
          {props.height}
        </li>
        <li>
          <b>Birth: </b>
          {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;

import './Random.css';

function Random(props) {
  var num = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div id="div3">
      <p>
        Random Value Between {props.min} and {props.max} {'=>'} {num}
      </p>
    </div>
  );
}

export default Random;

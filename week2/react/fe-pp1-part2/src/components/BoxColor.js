import './BoxColor.css';

function BoxColor(props) {
  const rgb_color = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  var hex =
    '#' +
    ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b)
      .toString(16)
      .slice(1);

  return (
    <div id="div2" style={rgb_color}>
      <p className="color">
        rgb({props.r},{props.g},{props.b})
      </p>
      <p className="color">{hex}</p>
    </div>
  );
}

export default BoxColor;

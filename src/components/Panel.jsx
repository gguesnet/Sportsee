import PropTypes from "prop-types";

function Panel({ img, value, unit, label }) {
  return (
    <article className="panel-metrics">
      <img src={img} height="60" width="60" />
      <div>
        <h3>
          {value}
          <span> {unit}</span>
        </h3>
        <p>{label}</p>
      </div>
    </article>
  );
}

Panel.propTypes = {
  img: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  label: PropTypes.string,
};

export default Panel;

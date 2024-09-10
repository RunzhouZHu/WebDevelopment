import { tours } from "../data";
import Tour from "./Tour.js";

const Tours = () => {
  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
import Background from "../../Assets/Lable5.jpg";
import Navbar from "../../Navbar";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar />
      <div
        className="AboutUsTop"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="AboutUsBottom">
        <h1>ABOUT US</h1>
        <p>
          Today we are living in a world where the creation of mass waste is
          inevitable. Because of the rising population in big cities every day,
          the production and consumption processes lead to the generation of
          huge amounts of waste. According to the statistics, the world’s rising
          population generates about 4.6 kilograms of solid waste per capita,
          that’s why asset tracking has become prominent in waste management. In
          the business processes substantially far too much waste is produced.
          Due to that businesses need effective waste management. Today, a
          successful business must not be content with ordinary waste management
          solutions. For example ordinary dust bins are no more efficient and
          effective for productive waste management. Thanks to brand new high
          technology such as smart bins it is possible and very practical to
          effectively manage waste. At that point it is so important to
          revolutionize your business’s waste management for better results in
          the most efficient way
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
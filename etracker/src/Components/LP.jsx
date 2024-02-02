import React from "react";
import "../Styles/LP.css";
import "../Styles/Button.css";
import "../Styles/Button2.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LP = () => {
  return (
    <>
      {/* PAGE 1 */}
      <div id="parentdiv">
        <Navbar />

        <div id="herosection">
          <h1>Simplifying Your </h1>
          <br />

          <h2 id="h2Invest">
            Finance
            <br /> in an Ease
          </h2>
          <br />

          <h5>
            Monitor your expenses while you are on the shopping spree <br />
            with our intuitive and stylish tracker.
          </h5>
          <br />

          {/* <Link to="/member" className="LinkButton"><button class="button-86">Get Started</button></Link> */}
          <Link to="/member" className="LinkButton">
            <button class="button-86">Get Started</button>
          </Link>
        </div>
      </div>

      {/* PAGE 2 */}

      <div id="parentdiv2">
        <div id="header">
          <h1>
            <span id="KeySpan">Key</span>
            <span id="FeaturesSpan">Features</span>
          </h1>
          <h5>
            Effortlessly manage and track your expenses with our intuitive
            expense tracking app.
            <br />
            <br />
            Streamline financial control, gain insights, and stay organized on
            the go
          </h5>
        </div>
        <div id="tab">
          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
            <i class="fa-solid fa-money-bill fa-2xl"></i>
            <h1 className="h1tab">Timely Updates</h1>
            <h5 className="h5tab">
              Get updates on your expenses if they
              <br /> get out of your budget.
            </h5>
          </div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
            <i class="fa-solid fa-briefcase fa-2xl"></i>
            <h1 className="h1tab">Detailed Analysis</h1>
            <h5 className="h5tab">
              Access detailed analysis of <br /> your spending.
            </h5>
          </div>

          <div className="tabchild">
            {/* ADD DIFFERENT ICONS */}
            <i class="fa-solid fa-people-group fa-2xl"></i>
            <h1 className="h1tab">Share Expenses in Group</h1>
            <h5 className="h5tab">
              Easily add members and split <br />
              the amount between them
            </h5>
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div id="parentdiv3">
        <div id="header">
          <h1>Testimonials</h1>
          <h5>
            Don't just take our word for it. Hear what our Investors have to
            say.
          </h5>
        </div>

        <div id="tab-container">
          <div className="tabs">
            <img
              src="https://avatars.githubusercontent.com/u/8151169?v=4"
              alt=""
            />
            <h1>Erlich Bachman</h1>
            <h6>Chief Evangelist Officer at Pied Piper, Ex Aviato</h6>
            <p>
              "ExpenseMitra, the ultimate game changer for managing my expenses,
              Now offcourse, I don't need to keep every of my spending written
              on my hand. I've got skin in the financial game, owning a solid
              10% of ExpenseMitra, Like Pied Piper. And let's not forget, I have
              made strategic moves like selling my company Aviato. in the end,
              based on my very good track record, I Highly recommend this to
              everyone, because missing a part of your money is so last season!"
            </p>
            <p></p>
          </div>

          <div className="tabs">
            <img
              src="https://pbs.twimg.com/profile_images/731951677859868674/2iRz4Ikp_400x400.jpg"
              alt=""
            />
            <h1>Gavin Belson</h1>
            <h6>Investor, Ex CEO Hooli</h6>
            <p>
              "An unparalleled masterpiece in the realm of tracking my finances!
              ExpenseMitra, With its cutting-edge features, I can effortlessly
              gauge how much ground I need to cover in my savings and finances
              to outshine even the likes of Jeff Bezos. The features are nothing
              short of revolutionary – a Hooli-level advantage in navigating the
              intricate landscape of investments.It is offcourse still in
              question whether it is Hooli property or not as it's still
              contested in court.."
            </p>
          </div>

          <div className="tabs">
            <img
              src="https://i.scdn.co/image/ab67706c0000da84a8f856841e132a9c0f6dff19"
              alt=""
            />
            <h1>Rus Hanneman</h1>
            <h6>Member of the three comma club and Investor</h6>
            <p>
              People, let me tell you, this app ExpenseMitra, is the Elon Musk
              of expense trackers! It's like having a rocket strapped to my
              finances, the features are extraordianry that hit harder than a
              SpaceX launch, and my tres comma club? Oh, it's thriving! Thanks
              to ExpenseMitra, I'm not just tracking; I'm cruising in my latest
              ride, This app is not just a tool; it's the fuel for my financial
              journey. Get on the rocket ship, or you'll be left behind!
            </p>
          </div>
        </div>
      </div>

      {/* Page 4 */}
      <Footer />
    </>
  );
};

export default LP;

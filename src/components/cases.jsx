import React from "react";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custome formule for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="containter-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
              
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

import React from "react";
import { connect } from "react-redux";
import "../assets/css/reactJsQuiz.css";

const ReactJsQuiz = (props) => {
  return (
    <div className="reactJsQuizContainer col-8 ">
      {props.state.elements.map((item, index) => {
        return (
          <div className="elementContainer w-100 border border-white">
            <div className="w-100 border border-white">{item[0]}</div>
            <div className="w-100 border border-white">
              {item[1].map((answer) => {
                return (
                  <form>
                    <label>
                      <input
                        type="radio"
                        value={answer}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                      />
                      {answer}
                    </label>
                  </form>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ReactJsQuiz);

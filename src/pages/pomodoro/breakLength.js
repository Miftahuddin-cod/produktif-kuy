import React from "react";

function BreakLength(props) {
  function increaseCounter() {
    if (props.breakLength === 60) {
      return;
    }

    props.increaseBreak()
  }

  function decreaseCounter() {
    if (props.breakLength === 1) {
      return;
    }

    props.decreaseBreak()
  }
  return (
    <section className="flex-1">
      <h4 className="text-center font-bold mb-3">Break Length</h4>
      <div className="flex items-center justify-center">
        <button disabled={props.isPlay === true ? "disabled" : ""} className="px-5 font-bold text-2xl" onClick={decreaseCounter}>-</button>
        <p className="px-3 text-3xl">{props.breakLength}</p>
        <button disabled={props.isPlay === true ? "disabled" : ""} className="px-5 font-bold text-2xl" onClick={increaseCounter}>+</button>      </div>
    </section>
  )
}

export default BreakLength;
import React from "react";

function SessionLength(props) {
  function increaseCounter() {
    if (props.sessionLength === 60) {
      return;
    }

    props.increaseSession()
  }

  function decreaseCounter() {
    if (props.sessionLength === 1) {
      return;
    }

    props.decreaseSession()
  }

  return (
    <section className="flex-1">
      <h4 className="text-center font-bold mb-3">Session Length</h4>
      <div className="flex items-center justify-center">
        <button disabled={props.isPlay === true ? "disabled" : ""} className="px-5 font-bold text-2xl" onClick={decreaseCounter}>-</button>
        <p className="px-3 text-3xl">{props.sessionLength}</p>
        <button disabled={props.isPlay === true ? "disabled" : ""} className="px-5 font-bold text-2xl" onClick={increaseCounter}>+</button>
      </div>
    </section>
  )
}

export default SessionLength;
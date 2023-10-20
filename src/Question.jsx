import { AiOutlinePlus, AiOutlineMinus } from "react-icons/bs";
import { useState } from "react";

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = activeId === id;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default Question;

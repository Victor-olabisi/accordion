import Question from "./Question";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId)
  };
  return (
    <main>
      <div className="container">
        <h1>questions</h1>
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              {...question}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;

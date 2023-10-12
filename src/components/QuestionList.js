import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {listOfQuestions}
      </ul>
    </section>
  );
  }

export default QuestionList;

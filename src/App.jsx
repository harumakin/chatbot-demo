// feature

import React {useState, useEffect, useCallback} from "react";
import "./assets/styles/style.css";

import defaultDataset from "./dataset";
import { AnswersList, Chats } from "./components";
import FormDialog from "./components/Forms/FormDialog";
import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [answers, setAnswers] = useState([])
  const [chats, setChats] = useState([])
  const [currentId, setCurrentId] = useState("init")
  const [dataset, setDataset] = useState({})
  const [open, setOpen] = useState(false)

    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    const chats = this.state.chats;
    addChats({
      text: nextDataset.question,
      type: "question",
    });

      setAnswers(nextDataset.answers)
      setCurrentId(nextQuestionId)
    };
  };

  const selectAnswer = (selectedAnser, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => {
          displayNextQuestion(nextQuestionId, dataset[nextQuestionId]);
        }, 300);
        break;

      case nextQuestionId === "contact":
        handleClickOpen();
        break;

      case /^https:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      default:
        
       addChats ({
          text: selectedAnser,
          type: "answer",
        });

        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 2000);

        break;
    }
  };

  const addChats = (chat) => {
    setChats(prevChats => {
      // 前回のチャットに対して今回のチャットを追加する
      return [...prevChats, chat]
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }, [])

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }


  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList
          answers={answers}
          select={selectAnswer}
        />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App
"use client";
import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// npm i react-beautiful-dnd

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
    //2:42
  }, [getBoard]);
  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* rendering all the columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;

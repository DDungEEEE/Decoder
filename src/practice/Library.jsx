import React from "react";
import Book from "./Book";

function library(props){
    return(
        <div>
            <Book name = "처음 만난 파이썬" numOfPage = {300} />
            <Book name = "처음 만난 aws" numOfPage = {500} />
        </div>
    );
}

export default library;
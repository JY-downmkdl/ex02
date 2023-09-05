import React from "react";
function Submits({todoList}){
    return(
        <div>
            <h1>투두리스트</h1>
            <input name="todoList"/>
            <button>할 일 추가</button>
        </div>
    )
}
export default Submits;
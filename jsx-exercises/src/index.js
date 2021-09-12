import React from 'react';
import ReactDOM from 'react-dom';

function Book(){
    return(
        <div className="book">
            <div className="title">
                Book Title
            </div>
            <div className="author">
                The Author
            </div>
            <ul className="stats">
                <li className="rating">
                    5 Stars
                </li>
                <li className="isbn">
                    12-345678-910
                </li>
            </ul>

        </div>

    );
}

function Greetings(){
    let username = false;
    alert(username);
    return(  
        <span>{typeof(username)=="string"? username : "Not Logged In"}</span>

    );
}

const Table = ()=>{
    return(
        <table>
            <tbody>
                <tr>
                    <Data/>
                </tr>
            </tbody>
        </table>
    )
}

const Data = ()=>{
    return(
        <>
        <td>Col 1</td>
        <td>Col 2</td>
        <td>Col 3</td>
        </>
    )
}

ReactDOM.render(
    <Table/>,
    document.querySelector("#root")
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';

const testFiles = [
  {
    id:1,
    name:'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:20",
    latest_commit:{
      message: 'Initial Commit'
    }
  },
  {
    id:2,
    name:'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:20",
    latest_commit:{
      message: 'Initial Commit'
    }
  },
  {
    id:3,
    name:'public',
    type: 'folder',
    updated_at: "2016-07-11 21:24:20",
    latest_commit:{
      message: 'Initial Commit'
    }
  },
  {
    id:4,
    name:'README.md',
    type: 'file',
    updated_at: "2016-07-11 21:24:20",
    latest_commit:{
      message: 'Initial Commit'
    }
  },
]

const FileListItem = ({file})=>{
  return(
    <div className="row file-item bg-light py-2">
      <div className="col-sm-3">
        <FileName file={file}/>
      </div>
      <div className="col-sm-6">
        <CommitMessage commitMessage={file.latest_commit}/>
      </div>
      <div className="col-sm-3 text-end">
         <Time time={file.updated_at}/>
      </div>
    </div>
  );
}

const CommitMessage = ({commitMessage})=>{
  return(
    <span>{commitMessage.message}</span>
  );
}

const FileIcon = ({file})=>{
  let icon = file.type === 'folder' ? 'fas fa-folder folder-icon': 'fas fa-file-alt';
  return(
    <i className={icon}></i>
  );
}

const FileName = ({file})=>{
  return(
    <>
    <FileIcon file={file}/>
    <span className="ps-2 file-name">{file.name}</span>
    </>
  )
}
const Time = ({time})=>{
  const timeString = moment(time).fromNow();
  return(
      <span>{timeString}</span>
  );
}


const FileList = ({files})=>(
    files.map((file)=><FileListItem key={file.id} file={file}/>)
)

const Header = ({text})=>(
  <h1 className="text-center display-4 fw-bold">{text}</h1>
)

const App = ()=>{
  return(
    <div className="container">
      <Header text="GitHub File List Example"/>
      <FileList files={testFiles} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


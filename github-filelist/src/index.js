import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const FileListItem = ({file})=>{
  return(
    <div className="row file-item bg-light py-2">
      <div className="col-sm-3">
        <i className="fas fa-folder folder-icon"></i>
        <span className="ps-2 file-name">{file.name}</span>
      </div>
      <div className="col-sm-6 text-center">
        {file.commitMessage}
      </div>
      <div className="col-sm-3 text-end">
        {file.date}
      </div>
    </div>
  );
}




ReactDOM.render(
  <React.StrictMode>
    <FileListItem />
  </React.StrictMode>,
  document.getElementById('root')
);


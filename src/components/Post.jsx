import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Post({ document, name, date }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  const onButtonClick = (document) => {
    console.log(document)
    fetch(document).then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = document;
          alink.click();
      })
  })
}

  return (
    <div className='post'>
      <div className='content'>
        <div className='title'>
          <h3>{date}</h3>
          <h1>{name}</h1>
        </div>
        <a href={document} style={{position:'relative', top:'15px' }}>Link to document</a>
      </div>
    </div>
  );
}

export default Post;
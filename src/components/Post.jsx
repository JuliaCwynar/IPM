function Post() {

  const onButtonClick = () => {
    fetch('SamplePDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'stage1.docx';
            alink.click();
        })
    })
}

  return (
  <div className='post'>
    <div className='content'>
      <div className='title'> 
        <h3>02/10/2023</h3>
        <h1>Stage 1: Project proposal</h1>
      </div>
      <button className='button-13' onClick={onButtonClick}>
                    Download PDF
                </button>
    </div>
  </div>
  )
}

export default Post
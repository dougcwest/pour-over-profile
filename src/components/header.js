const header = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
          <h1>Project Pour-Over</h1></div>  
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default header;
const header = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="page-header">
          <h1 className="d-flex justify-content-center text-primary">
            Project Pour-Over
          </h1>
        </div>
      </div>
    </div>
    <div className="row">{props.children}</div>
  </div>
);

export default header;

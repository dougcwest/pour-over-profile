import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoffee } from '../actions';

const CoffeeIndex = () => {
  const coffee = useSelector((state) => state.coffee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCoffee]);
  return (
    <div>
      <div className="page-header">
        <h1 className="text-primary">Pour-Over Profile</h1>
        <br />
        <h4 className="text-muted">
          Take the Coffee Quiz below to get a custom recipe based on your
          preferences.
        </h4>
        <Link className="quiz btn btn-warning" role="button" to="/new-contact">
          Coffee Quiz <i className="fa fa-coffee" />
        </Link>
      </div>
      <div className="row row-cols-1 row-cols g-4">
        {coffee.map((c) => (
          <div key={c.method} className="col-md-6 offset-md-3">
            <div className="text-white bg-secondary mb-3">
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    className="card-img rounded-0"
                    src={c.main_icon}
                    alt="Contact Avatar"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3 className="card-title">{c.method}</h3>
                    <p className="card-text">
                      <img
                        className="bean-icon"
                        src={c.bean_icon}
                        alt="coffee beans"
                      />{' '}
                      <em>{c.coffee}</em>
                    </p>
                    <p className="card-text">
                      <i className="fa fa-fire fa-lg" />{' '}
                      <em>Roast: {c.roast}</em>
                    </p>
                    <p className="card-text">
                      <i className="fa fa-info-circle fa-lg" />{' '}
                      <em>{c.description}</em>
                    </p>
                    <Link
                      className=" btn btn-warning btn-sm"
                      role="button"
                      to={`/${c.name}`}
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeIndex;

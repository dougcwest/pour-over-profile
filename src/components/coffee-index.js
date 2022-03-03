import React, { useEffect, useState } from 'react';
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
      <div className="col-12 col-md-8 d-flex align-items-center">
        <h4 className="text-dark">The Methods</h4>
      </div>
      <div className="row row-cols-1 row-cols g-4">
        {coffee.map((c) => (
          <div key={c.method} className="col-md-6 offset-md-3">
            <div className="text-white bg-secondary mb-3">
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    className="card-img-fluid rounded-0"
                    src={c.main_icon}
                    alt="Contact Avatar"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h3 className="card-title text-warning">{c.method}</h3>
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
                      <button
                        className="btn btn-link text-left text-white"
                        type="button"
                      >
                        <i className="fa fa-info-circle fa-lg" />{' '}
                      </button>
                      <em>{c.description}</em>
                    </p>
                    {/* <Link
                      className=" btn btn-warning btn-sm"
                      role="button"
                      to={`/${c.name}`}
                    >
                      View Recipe
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 col-md-8 d-flex align-items-center text-center">
        <h4 className="text-dark">Find out which method works best for you!</h4>
      </div>
      <h6 className="text-primary">
        Take the coffee quiz below to get a custom recipe based on your
        preferences!
      </h6>
      <div className="col-12 col-md-8 text-center">
        <Link className="quiz btn btn-warning" role="button" to="/coffee-quiz">
          Coffee Quiz <i className="fa fa-coffee" />
        </Link>
      </div>
    </div>
  );
};

export default CoffeeIndex;

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const routes = [
    {
        path: '/',
        exact: true,
        breadcrumb: () => <h2></h2>,
    }
  ]


function Breadcrumbs () {
    return(

        <section className="breadcrumb breadcrumb_bg align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-sm-6">
                        <div className="breadcrumb_tittle text-left">
                            {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.breadcrumb}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="breadcrumb_content text-right">
                            <p>
                                Home<span>/</span>
                                About Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}
    
 


export default Breadcrumbs;
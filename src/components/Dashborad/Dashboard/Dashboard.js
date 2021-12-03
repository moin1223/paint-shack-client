import React from 'react';
import { Switch, Route} from "react-router-dom";
import BookingList from '../../BookingList/BookingList';

const Dashboard = () => {

    return (
        <div>
            <Switch>
                <Route path="/dashboard">
                    <BookingList />
                </Route>
                <Route path="/addService">
                    <BookingList />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
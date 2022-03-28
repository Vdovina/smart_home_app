import React from 'react';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';

const items = [{value:'Main Page', href: '/home'},
               {value:'Settings Page', href: '/settings'}              
];

export const useRoutes = (props, isAuthenticated) => {
    //debugger;
    if (isAuthenticated) {
        return (
            <div style={{width: '100vw', height: '100vh'}}>
                {/* <Header /> */}
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/home' exact render={() => <MainPage/>}/>
                        <Route path='/map' exact render={() => <ShowMap isAuthenticated={isAuthenticated}/>}/>
                        <Route path='/settings' render={() => <Create store={props.store}/>}/> */}
                        {/* <Route path='/logout' render={() => <Test/>}/> */}
                        <Navigate to='/home'/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/map' exact render={() => <ShowMap isAuthenticated={isAuthenticated} />}/>
                <Route path='/login' exact render={ () => <Login />} />
                <Route path='/home' exact render={() => <StartPage/>}/> */}
                {/* <Navigate from='/' to='/home'/> */}
            </Routes>
        </BrowserRouter>
    )
    return <div/>
}
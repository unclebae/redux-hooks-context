import React from 'react';
import { mainActionReducer, initial } from "layouts/MainLayoutRedux";
import { StateProvider, useStateValue } from "redux/StateContext"; 
import Title from "components/Title";
import InputForm from "components/InputForm";

const MainLayout = () => {
    return (
        <StateProvider initialState={initial} reducer={mainActionReducer}>
            <div>
                <InputForm />
                <Title />
            </div>
        </StateProvider>
    );
}

export default MainLayout;
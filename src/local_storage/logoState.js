import React from 'react';
import globalHook from 'use-global-hook';


localStorage.setItem('isLogoVisable', 'false');
const isLogoVisable = localStorage.getItem('isLogoVisable');

const initialState = {
    visable: isLogoVisable,
  };
const actions = {
    changeVisabilty: (visabilty, value) => {
    const newValue = value;
    visabilty.setState({ visable: newValue });
    localStorage.setItem('isLogoVisable', 'true')
    },
};

const logoState = globalHook(React, initialState, actions);

export default logoState;
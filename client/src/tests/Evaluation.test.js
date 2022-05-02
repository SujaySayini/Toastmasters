/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { mount, configure } from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
 import * as actions from '../actions/evaluation.js';
 import Evaluation from "../components/Evaluation";
 import {createStore, applyMiddleware, compose} from 'redux';
 import DropDownList from "../components/DropDownList.js";
 
 //Note that for the tests to work every component you render must import React for some reason.
 
 configure({adapter: new Adapter()});
 let wrapper;
 let container = null;
 window.alert = jest.fn();
 React.useEffect = jest.fn();
 beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
 });

 afterEach(() => {
    // cleanup on exiting
    
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    container.remove();
    container = null;
  });

 describe('Evaluation Tests', () => {
    it('Submitting Evaluation', () => {
        window.alert.mockClear();
        actions.createEvaluation = jest.fn().mockResolvedValue({data: {ifExists: "No"}});
        act(() =>{
            wrapper = mount(<Evaluation/>, { attachTo: container });
            wrapper.find('form').simulate("submit");
        });
        
    
        expect(actions.createEvaluation).toBeCalledTimes(1);
        wrapper.detach();
    });
});
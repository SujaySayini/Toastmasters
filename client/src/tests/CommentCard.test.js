/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { mount, configure } from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
 import * as actions from '../actions/speech.js';
 import CommentCard from "../components/CommentCard.js";
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

 describe('CommentCard Tests', () => {
    it('Submitting Speech', () => {
        window.alert.mockClear();
        actions.createCommentCard = jest.fn().mockResolvedValue({data: {ifExists: "No"}});
        act(() =>{
            wrapper = mount(<CommentCard/>, { attachTo: container });
            wrapper.find('form').simulate("submit");
        });
        
    
        expect(actions.createCommentCard).toBeCalledTimes(1);
        wrapper.detach();
    });
});
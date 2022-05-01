/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { Provider } from "react-redux";
 import { mount, configure } from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 
 import CommentCard from "../components/CommentCard.js";
 import {createStore, applyMiddleware, compose} from 'redux';
 import thunk from 'redux-thunk';
 import reducers from '../reducers'
 import DropDownList from "../components/DropDownList.js";
 
 //Note that for the tests to work every component you render must import React for some reason.
 
 const store = createStore(reducers, compose(applyMiddleware(thunk)));
 configure({adapter: new Adapter()});
 let wrapper;
 let container = null;
 beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    wrapper = mount(<Provider store={store}>
                        <CommentCard/>
                    </Provider>, { attachTo: container });
 });
 describe('CommentCard Tests', () => {
    it('Speech Does Not Exist', async () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');

        wrapper.find('#positive1').simulate("change", { target: { value: "Good Job" }})
        wrapper.find('#positive2').simulate("change", { target: { value: "Good hand gestures" }})
        wrapper.find('#negative1').simulate("change", { target: { value: "Poor eye contact" }})
        wrapper.find(DropDownList).simulate("change", { target: { name: "CommentCard Test" }})
        wrapper.find('form').simulate("submit");
    
        expect(spy).toEqual("No");
        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});
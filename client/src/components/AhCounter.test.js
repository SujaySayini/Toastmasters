/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { Provider } from "react-redux";
 
 import App from "../App.js";
 import AhCounter from "../AhCounter.js";
 //import ForgotPassword from ".ForgotPassword/"
 import {createStore, applyMiddleware, compose} from 'redux';
 import thunk from 'redux-thunk';
 import reducers from '../reducers'
 
 //Note that for the tests to work every component you render must import React for some reason.
 
 const store = createStore(reducers, compose(applyMiddleware(thunk)));
 let container = null;
 beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
 });
 
 afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it("Cannot sign up with no first name", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <AhCounter />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
        document.getElementById('member').value= "Nick"
        document.getElementById('type-speech').value = 'Evaluator'
        document.getElementById('ahCounter-submit').Event(new MouseEvent("click"))
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=AhCounter;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
 
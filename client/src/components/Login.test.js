/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";

import App from "../App.js";
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

it("Logs in successfully with valid credentials", async () => {
  act(() => {
    render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode> 
        </Provider>, container);
  });

  //setting the inputs
  await act(async () => {
    document.getElementById('login-email').value= 'nick2@gmail.com'
    document.getElementById('login-password').value = 'password'
    document.getElementById('login-submit').dispatchEvent(new MouseEvent("click"))
  });
  await new Promise(r => setTimeout(r, 2000));
  console.log(document.cookie)

  //user has successfully logged in if the page has changed to be the homepage
  expect(document.cookie.substring(0, 14)).toBe("page=HomePage;");

  //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  
});
it("Does not login with invalid credentials", async () => {
    console.log(document.cookie)
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <App />
              </React.StrictMode> 
          </Provider>, container);
    });
  
   
    await act(async () => {
      document.getElementById('login-email').value= 'nick@gmail.com'
      document.getElementById('login-password').value = 'word'
      document.getElementById('login-submit').dispatchEvent(new MouseEvent("click"))
    });
    // same as sleeping for 2 seconds (gives mongodb time to respond)
    await new Promise(r => setTimeout(r, 2000));

    //user has successfully logged in if the page has remained the Login Page
    expect(document.cookie.substring(0, 14)).toBe("page=Login");
  });


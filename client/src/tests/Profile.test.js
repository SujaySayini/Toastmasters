import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { Provider } from "react-redux";

 import Profile from "../components/Profile.js";
 //import App from "../App.js";
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
 
 it("User successfully edits information", async () => {
   act(() => {
     render(
         <Provider store={store}>
             <React.StrictMode>
                 <Profile />
             </React.StrictMode> 
         </Provider>, container);
   });
 
   //setting the inputs
   await act(async () => {
     document.getElementById('profile-first').value= ""
     document.getElementById('profile-last').value = 'Idowu'
     
    
     
   });
   await new Promise(r => setTimeout(r, 2000));
   console.log(document.cookie)
 
   //user has successfully logged in if the page has changed to be the homepage
   expect(document.cookie.substring(0, 14)).toBe("page=Profile;");
 
   //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
   document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   
 });


 it("User successfully deregisters from club", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <Profile />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
        const token=jwt.sign({user: {
            club: "cdxcsd",
            email: "temp@gmail.com",
            first: "temp", 
            last: "temp",
            username: "temp",
            title: "",
            userLevel: "General"
          }}, 'test', {expiresIn:"1h" })

        document.cookie = 'user=' + JSON.stringify(jwt_decode(token)) 
        document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
      
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=Login;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
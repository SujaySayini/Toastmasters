import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { Provider } from "react-redux";

 import SignUp from "./SignUp.js";
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
 
 it("Cannot sign up with no first name", async () => {
   act(() => {
     render(
         <Provider store={store}>
             <React.StrictMode>
                 <SignUp />
             </React.StrictMode> 
         </Provider>, container);
   });
 
   //setting the inputs
   await act(async () => {
     document.getElementById('signup-first').value= ""
     document.getElementById('signup-last').value = 'Idowu'
     document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
     document.getElementById('signup-password').value= 'password'
     document.getElementById('signup-pass').value = 'password'
     document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
     document.getElementById('signup-securityanswer').value = 'Silver Spring '
     document.getElementById('signup-club').value = 'Rutgers'
     document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
     document.get
    
     
   });
   await new Promise(r => setTimeout(r, 2000));
   console.log(document.cookie)
 
   //user has successfully logged in if the page has changed to be the homepage
   expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
 
   //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
   document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   
 });


 it("Cannot sign up with no last name", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= "Jacquelynne"
      document.getElementById('signup-last').value = ''
      document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'password'
      document.getElementById('signup-4').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = 'Silver Spring '
      document.getElementById('signup-club').value = 'Rutgers'
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });

  it("Cannot sign up with email that is already taken", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= 'Jacquelynne'
      document.getElementById('signup-last').value = 'Idowu'
      document.getElementById('signup-email').value= 'temp'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'password'
      document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = 'Silver Spring '
      document.getElementById('signup-club').value = 'Rutgers'
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });

  it("Cannot sign up when passwords do not match", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= 'Jacquelynne'
      document.getElementById('signup-last').value = 'Idowu'
      document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'passwor'
      document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = 'Silver Spring '
      document.getElementById('signup-club').value = 'Rutgers'
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
      
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });

  it("Cannot sign up with no answer to security question", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= 'Jacquelynne'
      document.getElementById('signup-last').value = 'Idowu'
      document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'password'
      document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = ''
      document.getElementById('signup-club').value = 'Rutgers'
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
  it("Cannot sign up with club that does not exist", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= 'Jacquelynne'
      document.getElementById('signup-last').value = 'Idowu'
      document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'password'
      document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = 'Silver Spring '
      document.getElementById('signup-club').value = 'Rutgers'
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=SignUp;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
  it("Succesfully sign up", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <SignUp />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('signup-first').value= ""
      document.getElementById('signup-last').value = 'Idowu'
      document.getElementById('signup-email').value= 'ijacquelynnei@yahoo.com'
      document.getElementById('signup-password').value= 'password'
      document.getElementById('signup-pass').value = 'password'
      document.getElementById('signup-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('signup-securityanswer').value = 'Silver Spring '
      document.getElementById('signup-club').value = ''
      document.getElementById('signup-submit').dispatchEvent(new MouseEvent("click"))
    
     
      
    });
    await new Promise(r => setTimeout(r, 2000));
    console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=HomepPge;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
 
 
 
 
 
 
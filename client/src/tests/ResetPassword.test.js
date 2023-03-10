/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { Provider } from "react-redux";

 import ResetPassword from "../components/ResetPassword.js";
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
 
 it("Cannot reset password with invalid email", async () => {
   act(() => {
     render(
         <Provider store={store}>
             <React.StrictMode>
                 <ResetPassword />
             </React.StrictMode> 
         </Provider>, container);
   });
 
   //setting the inputs
   await act(async () => {
     document.getElementById('resetpassword-email').value= 'z'
     document.getElementById('resetpassword-password').value = 'password'
     document.getElementById('resetpassword-pass').value= 'password'
     document.getElementById('resetpassword-securityquestion').value = 'In What City Were You Born In?'
     document.getElementById('resetpassword-securityanswer').value = 'Silver Spring '
     document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
   });
   await new Promise(r => setTimeout(r, 2000));
   //console.log(document.cookie)
 
   //user has successfully logged in if the page has changed to be the homepage
   expect(document.cookie.substring(0, 14)).toBe("page=ResetPassword;");
 
   //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
   document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
   
 });
 it("Cannot reset password with no email", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <ResetPassword />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('resetpassword-email').value= ""
      document.getElementById('resetpassword-password').value = 'password'
      document.getElementById('resepassword-pass').value= 'password'
      document.getElementById('resetpassword-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('resetpassword-securityanswer').value = 'Silver Spring '
      document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
    });
    await new Promise(r => setTimeout(r, 2000));
    //console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=ResetPassword;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });



 it("Cannot reset password when passwords do not match", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <ResetPassword />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('resetpassword-email').value= 'temp'
      document.getElementById('resetpassword-password').value = ""
      document.getElementById('resetpassword-pass').value= 'password'
      document.getElementById('resetpassword-securityquestion').value = 'In What City Were You Born In?'
      document.getElementById('resetpassword-securityanswer').value = 'Silver Spring '
      document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
    });
    await new Promise(r => setTimeout(r, 2000));
    //console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=ResetPassword;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });

  it("Cannot reset password when security Question does not match", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <ResetPassword />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('resetpassword-email').value= 'temp'
      document.getElementById('resetpassword-password').value = 'password'
      document.getElementById('resetpassword-pass').value= 'password'
      document.getElementById('resetpassword-securityquestion').value = "What is your mother's maiden name"
      document.getElementById('resetpassword-securityanswer').value = 'Silver'
      document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
    });
    await new Promise(r => setTimeout(r, 2000));
    //console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=ResetPassword;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });

  it("Cannot reset password when asnwer does not match", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <ResetPassword />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('resetpassword-email').value= 'temp'
      document.getElementById('resetpassword-password').value = 'password'
      document.getElementById('resetpassword-pass').value= 'password'
      document.getElementById('resetpassword-securityquestion').value = 'In what city were you born in?'
      document.getElementById('resetpassword-securityanswer').value = 'Silver'
      document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
    });
    await new Promise(r => setTimeout(r, 2000));
    //console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=ResetPassword;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
  it("Password is reset with valid credentials and reequirements", async () => {
    act(() => {
      render(
          <Provider store={store}>
              <React.StrictMode>
                  <ResetPassword />
              </React.StrictMode> 
          </Provider>, container);
    });
  
    //setting the inputs
    await act(async () => {
      document.getElementById('resepassword-email').value= 'temp'
      document.getElementById('resetpassword-password').value = 'password'
      document.getElementById('resetpassword-pass').value= 'password'
      document.getElementById('resetpassword-securityquestion').value = 'In what city were you born in?'
      document.getElementById('resetpassword-securityanswer').value = 'Silver Spring'
      document.getElementById('resetpassword-submit').dispatchEvent(new MouseEvent("click"))
    });
    await new Promise(r => setTimeout(r, 2000));
    //console.log(document.cookie)
  
    //user has successfully logged in if the page has changed to be the homepage
    expect(document.cookie.substring(0, 14)).toBe("page=Homepage;");
  
    //AFTER EACH TEST MAKE SURE TO RESET COOKIES!!
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    document.cookie = "page=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    
  });
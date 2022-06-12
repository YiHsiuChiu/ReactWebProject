import handlefoodStyleChange from "./CheckboxForm";
import CheckboxForm from "./CheckboxForm";
import {queryByTestId, render,screen} from "@testing-library/react";
import store from '../utils/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"

//test("點選西式、麥側、星期一、100~200、速食，預期 return")
describe("元件測試", ()=> {

    test('確認button', () =>{
        render(
            <Provider store={store}>
                <Router>
                    <CheckboxForm/>
                </Router>
            </Provider>);
        const mybutton = screen.queryByTestId("test_button")
        expect(mybutton).toBeTruthy();
    });
    test('確認checkbox', () =>{
        render(
            <Provider store={store}>
                <Router>
                    <CheckboxForm/>
                </Router>
            </Provider>);
        const mycheckbox = screen.queryByTestId("test_checkbox")
        expect(mycheckbox).toBeTruthy();
    });
    test('確認video', () =>{
        render(
            <Provider store={store}>
                <Router>
                    <CheckboxForm/>
                </Router>
            </Provider>);
        const myvideo = screen.queryByTestId("test_video")
        expect(myvideo).toBeTruthy();
    });

})

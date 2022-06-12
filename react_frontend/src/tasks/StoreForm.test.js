import StoreForm from "./StoreForm";
import { render, screen, fireEvent } from "@testing-library/react";
import store from '../utils/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"

describe("單元測試", () => {
    test("有checkbox可以勾選", () => {
        render(
            <Provider store={store}>
                <Router>
                    <StoreForm/>
                </Router>
            </Provider>);
        const chkbox = screen.queryAllByRole("checkbox");
        expect(chkbox).toBeTruthy();
    });
    test("有輸入框可以填寫", () => {
        render(
            <Provider store={store}>
                <Router>
                    <StoreForm/>
                </Router>
            </Provider>);
        const txtbox = screen.queryAllByRole("txtbox");
        expect(txtbox).toBeTruthy();
    });
    test("有送出按鈕", () => {
        render(
            <Provider store={store}>
                <Router>
                    <StoreForm/>
                </Router>
            </Provider>);
        const btn = screen.getByRole("button");
        expect(btn).toBeTruthy();
    });
});
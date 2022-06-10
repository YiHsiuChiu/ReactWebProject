import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckboxForm from "../tasks/CheckboxForm"
import ResultPage from "../tasks/ResultPage";
import MoreInfoPage from "../tasks/MoreInfoPage";
import StoreForm from "../tasks/StoreForm";

export default function App() {
    return (
        <>  
        <Routes>
            <Route path="/" element={<CheckboxForm />} />
            <Route path="/StoreForm" element={<StoreForm/>} />
            <Route path="/ResultPage" element={<ResultPage />} />
            <Route path="/MoreInfoPage/:targetindex" element={<MoreInfoPage />} />
            {/* <Route name="MoreInfoPage" path="/:text" element={<MoreInfoPage />} /> */}
        </Routes>
        </>
    );
}
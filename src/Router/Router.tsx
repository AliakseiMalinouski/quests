import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Progress } from "../components/Progress";

const HomeLazy = lazy(() => import('../Pages/PageHome'));

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Progress color="secondary"/>}>
                <HomeLazy/>
            </Suspense>}/>
        </Routes>
    )
}
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Progress } from "../components/Progress";

const HomeLazy = lazy(() => import('../Pages/PageHome'));
const ContactsLazy = lazy(() => import("../Pages/PageContacts"));

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Progress color="secondary"/>}>
                <HomeLazy/>
            </Suspense>}/>
            <Route path="/quests/page/:pagenumber" element={<Suspense fallback={<Progress color="secondary"/>}>

            </Suspense>}/>
            <Route path="/contacts" element={<Suspense fallback={<Progress color="secondary"/>}>
                <ContactsLazy/>
            </Suspense>}/>
        </Routes>
    )
}
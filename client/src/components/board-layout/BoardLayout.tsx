import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface Props {
    children: React.ReactNode,
    title: string
}

const BoardLayout: React.FC<Props> = (props: Props) => {
    return (
        <div id="layout-wrapper">
            <Header title={props.title} />
            <div id="children-wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default BoardLayout;
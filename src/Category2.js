import React, { useState, Fragment } from "react";
import {
    Container,
    ProgressBar,
    ScrollContent,
} from "./Styles";
import HeaderMain from "./HeaderMain";
import CategoryRoute2 from "./CategoryRoute2";
import Footer from "./Footer";
const Category2 = () => {
    const [scroll, setScroll] = useState(0);
 
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };
 
    window.addEventListener("scroll", onScroll);
 
    return (
        <Fragment>
            <Container>
                <ProgressBar
                    style={{ width: `${scroll}%` }}
                ></ProgressBar>
            </Container>
            <ScrollContent>
                <HeaderMain />
                <CategoryRoute2 />
                <Footer />
            </ScrollContent>
        </Fragment>
    );
};
 
export default Category2;
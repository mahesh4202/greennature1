import React, { useState, Fragment } from "react";
import {
    Container,
    ProgressBar,
    ScrollContent,
} from "./Styles";
import HeaderMain from "./HeaderMain";
import Success1 from "./Success1";
import Footer from "./Footer";
const CateSuccess1 = () => {
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
                <Success1 />
                <Footer />
            </ScrollContent>
        </Fragment>
    );
};
 
export default CateSuccess1;
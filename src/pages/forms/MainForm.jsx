import React from "react";
import JotformEmbed from "react-jotform-embed";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import MenuBarX from "../../components/MenuBar/MenuBarNav";
import "../forms/mainform.min.scss";

  const EventDetails8 = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <main>
        <HeaderBar></HeaderBar>
        {/* <ResponsiveHeader></ResponsiveHeader> */}
        <MenuBarX></MenuBarX>
        <MenuBar></MenuBar>
        <div className="container formpaddingneeded">
          <div className="row"></div>
        </div>
        {/* <div className="containerx">
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </div> */}

        <JotformEmbed src="https://form.jotform.com/letsbethechange.india/signup" />

        <Footer></Footer>
      </main>
    );
  };

export default EventDetails8;

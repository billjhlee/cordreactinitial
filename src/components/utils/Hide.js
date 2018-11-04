import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";

const styles = {
  block: { display: "block" },
  inline: { display: "inline-block" },
  none: { display: "none" }
};

class Hide extends Component {
  state = { width: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const {
      classes,
      children,
      breakpoint,
      up,
      hide,
      inline,
      except,
      style
    } = this.props;

    // let mediaQuery =
    //   "@media (" + (up ? "min" : "max") + "-width: " + breakpoint + "px)";
    //
    // let hideStyle = { [mediaQuery]: { display: "none" } };
    // console.log(hideStyle);

    let display = true;
    if ((up && width > breakpoint) || (!up && width < breakpoint) || hide) {
      display = false;
    }
    if (except) {
      display = true;
    }

    return (
      <div
        className={classNames({
          [classes.block]: display,
          [classes.inline]: inline,
          [style]: display,
          // [hideStyle]: true,
          [classes.none]: !display
        })}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Hide);

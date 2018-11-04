import React, { Component } from "react";
import "./App.css";

// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// HASH ROUTER
import { HashRouter, Route } from "react-router-dom";

// JSS SETUP
import { create } from "jss";
import injectSheet, { createGenerateClassName, JssProvider } from "react-jss";
import preset from "jss-preset-default";

// jss
const jss = create(preset());
const generateClassName = createGenerateClassName();

// Redux dev tools setup for dev env
const composeEnhancers =
	process.env.NODE_ENV !== "production" &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				name: "dova",
				actionsBlacklist: ["REDUX_STORAGE_SAVE"]
		  })
		: compose;
const enhancer = composeEnhancers(
	applyMiddleware(thunk)
	// other store enhancers if any
);
// store
const store = createStore(rootReducer, enhancer);

const styles = {
	"@keyframes opac": {
		from: { opacity: 0 },
		to: { opactiy: 1 }
	},
	App: {
		// animationName: "opac",
		// animationDuration: "0.5s"
	}
};

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Provider store={store}>
				<HashRouter>
					<JssProvider
						jss={jss}
						generateClassName={generateClassName}
					>
						<div className={classes.App}>
							<Route exact path="/">
								<div>App</div>
							</Route>
						</div>
					</JssProvider>
				</HashRouter>
			</Provider>
		);
	}
}

export default injectSheet(styles)(App);

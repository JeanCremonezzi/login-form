import { useState } from "react";

import Card from "./components/Card/Card";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
	const [useLogin, setUseLogin] = useState(true);

	const handleLinkClick = () => {
		setUseLogin((prevState) => {
			return !prevState;
		});
	};

	return (
		<Card>
			{useLogin && (
				<>
					<SignIn title="Sign in" />
					<a href="/#" onClick={handleLinkClick}>
						Sign Up
					</a>
				</>
			)}

			{!useLogin && (
				<>
					<SignUp title="Sign up" />
					<a href="/#" onClick={handleLinkClick}>
						Sign In
					</a>
				</>
			)}
		</Card>
	);
}

export default App;

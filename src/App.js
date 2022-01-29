import Card from "./components/Card/Card";
import SectionForm from "./components/SectionForm/SectionForm";

function App() {
	return (
		<Card>
			<SectionForm>
				<h1>Sign in</h1>

				<form>
					<label htmlFor="inpt-signin-username">Username</label>
					<input
						type="text"
						name="inpt-signin-username"
						placeholder="Your Username"
					/>

					<label htmlFor="inpt-signin-password">Password</label>
					<input
						type="password"
						name="inpt-signin-password"
						placeholder="Your Password"
					/>

					<button type="submit">Sign in</button>
				</form>
			</SectionForm>

			<SectionForm>
				<h1>Sign up</h1>

				<form>
					<label htmlFor="inpt-signup-username">Username</label>
					<input
						type="text"
						name="inpt-signup-username"
						placeholder="Your Username"
					/>

					<label htmlFor="inpt-signup-email">Email</label>
					<input
						type="email"
						name="inpt-signup-email"
						placeholder="youremail@mail.com"
					/>

					<label htmlFor="inpt-signup-password">Password</label>
					<input
						type="password"
						name="inpt-signup-password"
						placeholder="Your Password"
					/>

					<button type="submit">Sign up</button>
				</form>
			</SectionForm>
		</Card>
	);
}

export default App;

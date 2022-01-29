import Card from "./components/Card/Card";
import SectionForm from "./components/SectionForm/SectionForm";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";

function App() {
	return (
		<Card>
			<SectionForm>
				<h1>Sign in</h1>

				<Form>
					<label htmlFor="input-signin-username">Username</label>
					<Input
						type="text"
						name="input-signin-username"
						placeholder="Your Username"
					/>

					<label htmlFor="input-signin-password">Password</label>
					<Input
						type="password"
						name="input-signin-password"
						placeholder="Your Password"
					/>

					<button type="submit">Sign in</button>
				</Form>
			</SectionForm>

			<SectionForm>
				<h1>Sign up</h1>

				<Form>
					<label htmlFor="input-signup-username">Username</label>
					<Input
						type="text"
						name="input-signup-username"
						placeholder="Your Username"
					/>

					<label htmlFor="input-signup-email">Email</label>
					<Input
						type="email"
						name="input-signup-email"
						placeholder="youremail@mail.com"
					/>

					<label htmlFor="input-signup-password">Password</label>
					<Input
						type="password"
						name="input-signup-password"
						placeholder="Your Password"
					/>

					<button type="submit">Sign up</button>
				</Form>
			</SectionForm>
		</Card>
	);
}

export default App;

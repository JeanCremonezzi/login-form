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
					<Input
            label="Username"
						type="text"
						name="input-signin-username"
						placeholder="Your Username"
					/>

					<Input
            label="Password"
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
					<Input
            label="Username"
						type="text"
						name="input-signup-username"
						placeholder="Your Username"
					/>

					<Input
            label="Email"
						type="email"
						name="input-signup-email"
						placeholder="youremail@mail.com"
					/>

					<Input
            label="Password"
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

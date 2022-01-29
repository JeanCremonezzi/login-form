import Card from "./components/Card/Card";
import SectionForm from "./components/SectionForm/SectionForm";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
	return (
		<Card>
			<SectionForm>
				<Form title="Sign in">
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

					<Button type="submit" text="Sign In" />
				</Form>
			</SectionForm>

			<SectionForm>
				<Form title="Sign up">
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

					<Button type="submit" text="Sign Up" />
				</Form>
			</SectionForm>
		</Card>
	);
}

export default App;

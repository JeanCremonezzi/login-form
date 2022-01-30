import SectionForm from "../SectionForm/SectionForm";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function SignUp(props) {
	return (
		<>
			<SectionForm>
				<Form title={props.title}>
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
				</Form>
			</SectionForm>
		</>
	);
}

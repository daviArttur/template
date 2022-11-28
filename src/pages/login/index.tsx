import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTheme } from "styled-components";
import { Form } from "../../components/common/form";
import { Input } from "../../components/common/input";
import { Label } from "../../components/common/label";
import { FlexContainer } from "../../components/containers/FlexContainer";
import { theme } from "../../config/styles";
import { postCredentials } from "../api/user/auth/postAuth";

export default function Login() {

	const route = useRouter();
	const { colors } = useTheme();
	const [ email, setEmailValue ] = useState("");
	const [ password, setPasswordValue ] = useState("");

	function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const response = postCredentials({ email, password });

		console.log(response);
		if (response) route.push("/");
	}

	function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
		setEmailValue(event.target.value);
	}

	function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
		setPasswordValue(event.target.value);
	}

	return (

		<FlexContainer
			width="100vw"
			height="100vh"
			backgroundColor={colors.gray[900]}
		>
			<Form
				onSubmit={handleOnSubmit}
				flexFlow="column nowrap"
				height="29.875rem"
				maxWidth="25rem"
				width="100%"
			>
			
				<Label
					htmlFor="email"
				>
					Endereço de e-mail
					<Input
						id="email"
						name="email"
						type="email"
						value={email}
						onChange={handleEmailChange}
						placeholder="email"
						backgroundColor={theme.colors.gray[800]}
					/>
				</Label>

				<Label
					htmlFor="password"
				>
					Sua senha
					<Input
						id="password"
						name="password"
						type="password"
						value={password}
						onChange={handlePasswordChange}
						placeholder="password"
						backgroundColor={theme.colors.gray[800]}
					/>
				</Label>
			
				<button> Entrar na plataforma</button>
			</Form>
		</FlexContainer>
		
	);
}


interface Props {
	email: string;
	password: string;
}

export function postCredentials({ email, password }: Props) {

	if (email) return true;
	return false;
}
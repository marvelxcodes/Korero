import { PropsWithChildren } from "react";
import "@/styles/globals.scss";

export const metadata = {
	title: "Korero",
	description: "Korero is a web based lightweight chatapp."
};

function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}

export default RootLayout;

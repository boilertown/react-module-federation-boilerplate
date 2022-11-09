interface HeaderProps {
	text: string;
}

export const Header = (props: HeaderProps) => {
	return <>Header: {props.text}</>;
};

export default Header;

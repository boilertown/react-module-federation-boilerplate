import { SingleColumnLayout } from 'components/Layouts';

const HomePage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<h1>Hello from Fluffy Tomatoes!</h1>}
			renderFooter={null}
		/>
	);
};

export default HomePage;

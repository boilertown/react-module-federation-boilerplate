// @ts-ignore
import Header from 'shared_ui/Header';
import { SingleColumnLayout } from 'components/Layouts';

const HomePage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={
				<>
					<Header text="Fluffy Tomatoes" />
					<h1>Hello from Fluffy Tomatoes!</h1>
				</>
			}
			renderFooter={null}
		/>
	);
};

export default HomePage;

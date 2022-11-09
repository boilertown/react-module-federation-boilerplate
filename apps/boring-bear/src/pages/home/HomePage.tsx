// @ts-ignore
import Header from 'shared_ui/Header';
import { SingleColumnLayout } from 'components/Layouts';

const HomePage = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={
				<>
					<Header text="boring-bear" />
					<h1>Hello from Boring Bear!</h1>
				</>
			}
			renderFooter={null}
		/>
	);
};

export default HomePage;

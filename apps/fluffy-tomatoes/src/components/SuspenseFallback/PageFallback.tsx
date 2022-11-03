import { SingleColumnLayout } from 'components/Layouts';

export const PageFallback = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<h3>Loading...</h3>}
			renderFooter={null}
		/>
	);
};

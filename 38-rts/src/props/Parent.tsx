import { ChildAsFC } from './Child';

const Parent = () => {
	return (
		<ChildAsFC color='red' onClick={() => console.log('Clicked')}>
			asasas
		</ChildAsFC>
	);
};

export default Parent;

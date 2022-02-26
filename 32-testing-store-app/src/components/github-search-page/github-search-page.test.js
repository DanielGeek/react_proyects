import React from 'react';
import { render, screen } from '@testing-library/react';

import { GithubSearchPage } from './github-serach-page';

describe('When the GithubSearchPage is mounted', () => {
	it('must be display the title', () => {
		render(<GithubSearchPage />);

		expect(
			screen.getByRole('heading', { name: /github repositories list page/i })
		).toBeInTheDocument();
	});
});

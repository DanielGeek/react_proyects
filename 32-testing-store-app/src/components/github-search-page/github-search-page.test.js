import React from 'react';
import { render, screen } from '@testing-library/react';

import { GithubSearchPage } from './github-serach-page';

const setup = () => render(<GithubSearchPage />);

describe('When the GithubSearchPage is mounted', () => {
	it('must be display the title', () => {
		setup();

		expect(
			screen.getByRole('heading', { name: /github repositories list page/i })
		).toBeInTheDocument();
	});

	it('must be an input text with label "filter by" field', () => {
		setup();

		expect(screen.getByLabelText(/filter by/i)).toBeInTheDocument();
	});

	it('must be a Search Button', () => {
		setup();

		expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
	});

	it('must be a initial message `Please provide a search option and click in the search button`.', () => {
		setup();
    expect(
			screen.getByText(
				/please provide a search option and click in the search button/i
			)
		).toBeInTheDocument();
	});
});

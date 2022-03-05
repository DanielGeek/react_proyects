import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

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

describe('When the developer does a search', () => {
	it('the search button should be disabled until the search is done', async () => {
		setup();

		expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled();

		// click btn
		fireEvent.click(screen.getByRole('button', { name: /search/i }));

		// expect disabled
		expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();

		// not disabled (finish) async
		await waitFor(() =>
			expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled()
		);
	});

	it('the data should be displayed as a sticky table', async () => {
		setup();

		fireEvent.click(screen.getByRole('button', { name: /search/i }));

		await waitFor(() =>
			expect(
				screen.queryByText(
					/please provide a search option and click in the search button/i
				)
			).not.toBeInTheDocument()
		);

		expect(screen.getByRole('table')).toBeInTheDocument();
	});
});

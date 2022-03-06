import React from 'react';
import {
	fireEvent,
	render,
	screen,
	waitFor,
	within,
} from '@testing-library/react';

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
	const fireClickSearch = () =>
		fireEvent.click(screen.getByRole('button', { name: /search/i }));

	it('the search button should be disabled until the search is done', async () => {
		setup();

		expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled();

		// click btn
		fireClickSearch();

		// expect disabled
		expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();

		// not disabled (finish) async
		await waitFor(() =>
			expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled()
		);
	});

	it('the data should be displayed as a sticky table', async () => {
		setup();

		fireClickSearch();

		await waitFor(() =>
			expect(
				screen.queryByText(
					/please provide a search option and click in the search button/i
				)
			).not.toBeInTheDocument()
		);

		expect(screen.getByRole('table')).toBeInTheDocument();
	});

	it('the table headers must contain: Repository, starts, forks, open, issues and updated at', async () => {
		setup();

		fireClickSearch();

		const table = await screen.findByRole('table');

		const tableHeaders = within(table).getAllByRole('columnheader');

		expect(tableHeaders).toHaveLength(5);

		const [repository, starts, forks, openIssues, updatedAt] = tableHeaders;

		expect(repository).toHaveTextContent(/repository/i);
		expect(starts).toHaveTextContent(/starts/i);
		expect(forks).toHaveTextContent(/forks/i);
		expect(openIssues).toHaveTextContent(/open issues/i);
		expect(updatedAt).toHaveTextContent(/updated at/i);
	});

	it('each table result must contain: name, starts, updated at, forks, open issues, it should have a link that opens is a new tab', async () => {
		setup();

		fireClickSearch();

		const table = await screen.findByRole('table');

		const withinTable = within(table);

		const tableCells = withinTable.getAllByRole('cell');

		const [repository, stars, forks, openIssues, updatedAt] = tableCells;

		// eslint-disable-next-line jest/valid-expect
		expect(within(repository).getByRole('img', { name: /test/i }));

		expect(tableCells).toHaveLength(5);

		expect(repository).toHaveTextContent(/test/i);
		expect(stars).toHaveTextContent(/10/);
		expect(forks).toHaveTextContent(/5/);
		expect(openIssues).toHaveTextContent(/2/i);
		expect(updatedAt).toHaveTextContent(/2020-01-01/i);

		// eslint-disable-next-line testing-library/no-node-access
		expect(withinTable.getByText(/test/i).closest('a')).toHaveAttribute(
			'href',
			'http://localhost:3000/test'
		);
	});
});

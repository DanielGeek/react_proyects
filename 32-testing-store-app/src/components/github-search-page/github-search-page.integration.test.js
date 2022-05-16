import React from 'react';
import {
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { GithubSearchPage } from './github-serach-page';
import {
	makeFakeResponse,
	makeFakeRepo,
} from '../../__fixtures__/repos'
import { handlerPaginated } from '../../__fixtures__/handlers';
import { OK_STATUS } from '../../consts';

const fakeResponse = makeFakeResponse({ totalCount: 1 })

const fakeRepo = makeFakeRepo();

fakeResponse.items = [fakeRepo];

const server = setupServer(
	rest.get('/search/repositories', (req, res, ctx) =>
		res(ctx.status(OK_STATUS), ctx.json(fakeResponse)),
	),
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const setup = () => render(<GithubSearchPage />);

const fireClickSearch = () =>
	fireEvent.click(screen.getByRole('button', { name: /search/i }));


describe('when the developer does a search and selects 50 rows per page', () => {
	it('must fetch a new search and display 50 rows results on the table', async () => {
		setup();

		server.use(
			rest.get('/search/repositories', handlerPaginated
			),
		)

		fireClickSearch()

		expect(await screen.findByRole('table')).toBeInTheDocument()
		expect(await screen.findAllByRole('row')).toHaveLength(31)

		fireEvent.mouseDown(screen.getByLabelText(/rows per page/i))
		fireEvent.click(screen.getByRole('option', { name: '50' }))

		await waitFor(() =>
			expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled(),
		)
		expect(screen.getAllByRole('row')).toHaveLength(51)
	})
})

describe('when the developer clicks on search and then on next page button and then on previous page button', () => {
	it('must display the previus repositories page', async () => {
		setup();
		// config server handler
		server.use(rest.get('/search/repositories', handlerPaginated))

		// click search
		fireClickSearch()

		// wait table
		expect(await screen.findByRole('table')).toBeInTheDocument()

		// expect first repo name is from page 0
		expect(screen.getByRole('cell', { name: /1-0/ })).toBeInTheDocument()

		// expect next page is not disabled
		expect(screen.getByRole('button', { name: /next page/i })).not.toBeDisabled()

		// click next page button
		fireEvent.click(screen.getByRole('button', { name: /next page/i }))

		// wait search button is not disabled
		expect(screen.getByRole('button', { name: /search/i })).toBeDisabled()

		await waitFor(
			() =>
				expect(
					screen.getByRole('button', { name: /search/i }),
				).not.toBeDisabled(),
			{ timeout: 3000 },
		)

		// expect first repo name is from page 1
		expect(screen.getByRole('cell', { name: /2-0/ })).toBeInTheDocument()

		// click previous page
		fireEvent.click(screen.getByRole('button', { name: /previous page/i }))

		// wait search finish
		await waitFor(
			() =>
				expect(
					screen.getByRole('button', { name: /search/i }),
				).not.toBeDisabled(),
			{ timeout: 3000 },
		)

		// expect
		expect(screen.getByRole('cell', { name: /1-0/ })).toBeInTheDocument()
	}, 10000)
})

describe('When the developer does a search and clicks on next page button and selects 50 rows per page', () => {
	it.only('must display the results of the first page', async() => {
		setup();
		// config server handler
		server.use(rest.get('/search/repositories', handlerPaginated))

		// click search
		fireClickSearch()

		// wait table
		expect(await screen.findByRole('table')).toBeInTheDocument()

		// expect first repo name is from page 0
		expect(screen.getByRole('cell', { name: /1-0/ })).toBeInTheDocument()

		// expect next page is not disabled
		expect(screen.getByRole('button', { name: /next page/i })).not.toBeDisabled()

		// click next page button
		fireEvent.click(screen.getByRole('button', { name: /next page/i }))

		// wait search button is not disabled
		expect(screen.getByRole('button', { name: /search/i })).toBeDisabled()

		await waitFor(
			() =>
				expect(
					screen.getByRole('button', { name: /search/i }),
				).not.toBeDisabled(),
			{ timeout: 3000 },
		)

		// expect first repo name is from page 1
		expect(screen.getByRole('cell', { name: /2-0/ })).toBeInTheDocument()

		fireEvent.mouseDown(screen.getByLabelText(/rows per page/i))
		fireEvent.click(screen.getByRole('option', { name: '50' }))

		await waitFor(() =>
			expect(screen.getByRole('button', { name: /search/i })).not.toBeDisabled(),
		)

		// expect first repo name is from page 0
		expect(screen.getByRole('cell', { name: /1-0/ })).toBeInTheDocument()

	})
})


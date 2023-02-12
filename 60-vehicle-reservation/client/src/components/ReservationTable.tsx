import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useReservations } from '../graphql/hooks';
import { Reservation } from '../interfaces';

const useStyles = makeStyles({
	root: {
		width: '99%',
		overflowX: 'auto',
		margin: '10px',
	},
	table: {
		minWidth: 650,
	},
});

export default function ReservationTable() {
	const { reservations, loading, error } = useReservations();
	const classes = useStyles();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :${error}</p>;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>User ID</TableCell>
						<TableCell>Vehicle ID</TableCell>
						<TableCell>From</TableCell>
						<TableCell>To</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{reservations.map((row: Reservation) => (
						<TableRow key={row._id}>
							<TableCell component='th' scope='row'>
								{row._id}
							</TableCell>
							<TableCell>{row.userId}</TableCell>
							<TableCell>{row.vehicleId}</TableCell>
							<TableCell>{row.from.toString()}</TableCell>
							<TableCell>{row.to.toString()}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}

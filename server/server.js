import express from 'express';
import db from './db.js';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/items', (req, res) => {
	const items = db.prepare('SELECT * FROM items').all();
	res.setHeader('Content-Type', 'application/json');
	res.json(items);
});


app.post('/api/items', (req, res) => {
	const { name, price, url } = req.body;

	if (name == undefined || price == undefined) {
		return res.status(400).json({ error: 'Name and price are required.' });
	}

	if (url == undefined) {
		url = '';
	}

	try {
		db.prepare('INSERT INTO items (name, price, url) VALUES (?, ?, ?)').run(name, price, url);
		res.status(201).json({ message: 'Item added!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred while adding the item.' });
	}

});

app.delete('/api/items', (req, res) => {
	const { id } = req.body;

	if (id == undefined) {
		return res.status(400).json({ error: 'Item ID is required.' });
	}

	try {
		const result = db.prepare('DELETE FROM items WHERE id = ?').run(id);

		if (result.changes === 0) {
			return res.status(404).json({ error: 'Item not found.' });
		}

		res.status(200).json({ message: 'Item deleted successfully.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred while deleting the item.' });
	}
});


const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

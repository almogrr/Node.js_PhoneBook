var express = require('express');
var router = express.Router();

// Create a new user
router.post('/', (req, res) => {
  const { username, password, phoneNumber } = req.body;
  const user = { username, password, phoneNumber };
  req.db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User added successfully!', id: result.insertId });
  });
});

// Get all users
router.get('/', (req, res) => {
  req.db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get a single user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  req.db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(result[0]);
  });
});

// Update a user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, password, phoneNumber } = req.body;
  req.db.query('UPDATE users SET ? WHERE id = ?', [{ username, password, phoneNumber }, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User updated successfully!' });
  });
});

// Delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  req.db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted successfully!' });
  });
});

module.exports = router;

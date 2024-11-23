import sqlite3 from 'better-sqlite3';
const db = new sqlite3('database.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      url TEXT
    )
`);

export default db;
import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

const DB_NAME = 'user-database';
const STORE_NAME = 'users';

function IndexDbProject() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formEntries, setFormEntries] = useState([]);

  useEffect(() => {
    async function loadDataFromDB() {
      const db = await openDB(DB_NAME, 1);
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        return;
      }
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const entries = await store.getAll();
      setFormEntries(entries);
    }
    loadDataFromDB();
  }, []);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = await openDB(DB_NAME, 1);
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      return;
    }
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await store.add({ firstName, lastName, phoneNumber });
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    const entries = await store.getAll();
    setFormEntries(entries);
  };
const data =new Promise(() => {
    setTimeout(() => {}, 1000)
}). then(() =>{
    
})
  return (
    <div>
      <h1>IndexedDB Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => handleChange(e, setFirstName)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => handleChange(e, setLastName)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => handleChange(e, setPhoneNumber)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Stored Data:</h2>
      <ul>
        {formEntries.map((entry, index) => (
          <li key={index}>
            {entry.firstName} {entry.lastName} - {entry.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexDbProject;

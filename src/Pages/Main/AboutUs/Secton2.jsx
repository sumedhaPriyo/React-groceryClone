import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaLock } from 'react-icons/fa';

const Section2 = () => {
    const [forminput, setForminput] = useState({
        title: '',
        password: '',
        description: '',
    });

    const [passwordmatch, setPasswordMatch] = useState('');
    const [storeData, setStoreData] = useState([]);
    const [editClik, setEditClick] = useState(null);
    const [showpassword, setShowPassword] = useState(false);


    useEffect(() => {
        try {
            const getData = localStorage.getItem('notes');
            if (getData) {
                setStoreData(JSON.parse(getData));aa
            }
        } catch {
            localStorage.removeItem('notes');
            setStoreData([]);
        }
    }, []);

    const handleInputchange = (e) => {
        const { name, value } = e.target;
        setForminput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedData = [...storeData];

        if (editClik !== null) {
            updatedData[editClik] = forminput;
        } else {
            updatedData.push(forminput);
        }

        localStorage.setItem('notes', JSON.stringify(updatedData));
        setStoreData(updatedData);
        resetForm();
    };

    const resetForm = () => {
        setForminput({ title: '', password: '', description: '' });
        setEditClick(null);
    };

const handleDelete = (index) => {
    const confirmDelete = window.confirm(
        'Are you sure you want to delete this note?'
    );

    if (!confirmDelete) return;

    const updatedData = storeData.filter((_, i) => i !== index);
    setStoreData(updatedData);
    localStorage.setItem('notes', JSON.stringify(updatedData));
};

    const handleEdit = (note, index) => {
        setEditClick(index);
        setForminput(note);
        setShowPassword(true);
    };

    const handlePassworsChaeck = () => {
        if (passwordmatch === forminput.password) {
            setPasswordMatch('');
            setShowPassword(false);
        } else {
            alert('Password does not match');
            setPasswordMatch('');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 px-6 py-12">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
                📝 Notes Maker
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative">


                {showpassword && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-xl p-8 w-80">
                            <div className="flex items-center gap-2 mb-4">
                                <FaLock className="text-indigo-600" />
                                <h3 className="text-xl font-semibold">
                                    Enter Password
                                </h3>
                            </div>

                            <input
                                type="password"
                                value={passwordmatch}
                                onChange={(e) =>
                                    setPasswordMatch(e.target.value)
                                }
                                placeholder="Password"
                                className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-400"
                            />

                            <div className="flex gap-3">
                                <button
                                    onClick={handlePassworsChaeck}
                                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                                >
                                    Verify
                                </button>
                                <button
                                    onClick={() => {
                                        setShowPassword(false);
                                        setPasswordMatch('');
                                    }}
                                    className="flex-1 border py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                <form
                    onSubmit={handleSubmit}
                    className="md:col-span-1 bg-white rounded-3xl shadow-xl p-7"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        {editClik !== null ? '✏️ Update Note' : '➕ Create Note'}
                    </h2>

                    <input
                        type="text"
                        name="title"
                        value={forminput.title}
                        onChange={handleInputchange}
                        placeholder="Title"
                        className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        value={forminput.password}
                        onChange={handleInputchange}
                        placeholder="Password"
                        className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                        required
                    />

                    <textarea
                        name="description"
                        value={forminput.description}
                        onChange={handleInputchange}
                        placeholder="Write your note..."
                        rows="4"
                        className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition"
                    >
                        {editClik !== null ? 'Update Note' : 'Save Note'}
                    </button>
                </form>

         
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-6">
                        Your Notes
                    </h2>

                    {storeData.length === 0 ? (
                        <div className="bg-white p-8 rounded-2xl shadow text-center text-gray-500">
                            No notes yet ✨
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {storeData.map((note, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg p-5 relative hover:shadow-xl transition"
                                >
                                    <div className="absolute top-3 right-3 flex gap-3">
                                        <FaEdit
                                            className="text-indigo-500 cursor-pointer hover:text-indigo-700"
                                            onClick={() =>
                                                handleEdit(note, index)
                                            }
                                        />
                                        <FaTrash
                                            className="text-red-500 cursor-pointer hover:text-red-700"
                                            onClick={() =>
                                                handleDelete(index)
                                            }
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-indigo-700 mb-2">
                                        {note.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        {note.description}
                                    </p>
                                    <span className="text-xs text-gray-400">
                                        🔒 Protected
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section2;

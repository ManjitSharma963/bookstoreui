import React, { useState } from 'react';
import './Liberary.css';

const books = [
    {
        id: 1,
        tag: 'NEW',
        tagColor: 'bg-green-200 text-green-800',
        image: 'https://www.shutterstock.com/image-photo/dubai-uae-july-12-2024-260nw-2488469847.jpg',
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        categories: ['Classic', 'Novel'],
        availableCopies: 10,
        leftCopies: 7,
    },
    {
        id: 2,
        tag: 'SALE',
        tagColor: 'bg-red-200 text-red-800',
        image: 'https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-8a8430b5--Books5_1200x.jpg?v=1620061376',
        name: '1984',
        author: 'George Orwell',
        categories: ['Dystopian', 'Political Fiction'],
        availableCopies: 15,
        leftCopies: 5,
    },
    {
        id: 3,
        tag: null,
        image: 'https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8_1200x.jpg?v=1620061403',
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        categories: ['Classic', 'Historical'],
        availableCopies: 12,
        leftCopies: 4,
    },
    {
        id: 4,
        tag: 'NEW',
        tagColor: 'bg-green-200 text-green-800',
        image: 'https://www.radhakrishnatemple.net/sites/default/files/inline-images/JKYOG%20bhagavad%20Gita%20pics_0.jpg',
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        categories: ['Classic', 'Romance'],
        availableCopies: 8,
        leftCopies: 3,
    },
    {
        id: 5,
        tag: 'SALE',
        tagColor: 'bg-red-200 text-red-800',
        image: 'https://m.media-amazon.com/images/I/91AlWwBjrTL._AC_UF1000,1000_QL80_.jpg',
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        categories: ['Classic', 'Young Adult'],
        availableCopies: 20,
        leftCopies: 18,
    },
    {
        id: 6,
        tag: null,
        image: 'https://images.meesho.com/images/products/281922082/0nquc_512.webp',
        name: 'Moby Dick',
        author: 'Herman Melville',
        categories: ['Classic', 'Adventure'],
        availableCopies: 10,
        leftCopies: 6,
    },
    {
        id: 7,
        tag: 'NEW',
        tagColor: 'bg-green-200 text-green-800',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXVFWYrpGjxz-90XhQfVSAC7gg-19rxHUbA&s',
        name: 'War and Peace',
        author: 'Leo Tolstoy',
        categories: ['Classic', 'Historical'],
        availableCopies: 15,
        leftCopies: 9,
    },
    {
        id: 8,
        tag: null,
        image: 'https://img.freepik.com/free-vector/comic-book-cover-template-design_742173-29176.jpg',
        name: 'The Alchemist',
        author: 'Paulo Coelho',
        categories: ['Philosophical', 'Adventure'],
        availableCopies: 30,
        leftCopies: 25,
    },
    {
        id: 9,
        tag: 'SALE',
        tagColor: 'bg-red-200 text-red-800',
        image: 'https://d16kd6gzalkogb.cloudfront.net/magazine_images/Comic-Books.jpg',
        name: 'Brave New World',
        author: 'Aldous Huxley',
        categories: ['Dystopian', 'Science Fiction'],
        availableCopies: 18,
        leftCopies: 10,
    },
    {
        id: 10,
        tag: 'NEW',
        tagColor: 'bg-green-200 text-green-800',
        image: 'https://rukminim2.flixcart.com/image/750/900/xif0q/book/j/i/a/science-comics-boxed-set-original-imagkymr7feytq4z.jpeg?q=20&crop=false',
        name: 'Little Women',
        author: 'Louisa May Alcott',
        categories: ['Classic', 'Fiction'],
        availableCopies: 12,
        leftCopies: 7,
    },
    {
        id: 11,
        tag: null,
        image: 'https://bookshub.co.in/public/books/B0D8Y5JPTC.jpg',
        name: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        categories: ['Classic', 'Philosophical'],
        availableCopies: 8,
        leftCopies: 2,
    },
    {
        id: 12,
        tag: null,
        image: 'https://www.schoolkart.com/cdn/shop/files/Sarangi2.jpg?v=1689152434',
        name: 'Frankenstein',
        author: 'Mary Shelley',
        categories: ['Horror', 'Science Fiction'],
        availableCopies: 10,
        leftCopies: 4,
    },
    {
        id: 13,
        tag: 'NEW',
        tagColor: 'bg-green-200 text-green-800',
        image: 'https://booksfy.in/cdn/shop/products/class-10th-hindi-set-scaled_530x@2x.jpg?v=1630513813',
        name: 'The Odyssey',
        author: 'Homer',
        categories: ['Classic', 'Epic Poetry'],
        availableCopies: 6,
        leftCopies: 5,
    },
];
const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    joinedDate: 'January 1, 2020',
    borrowingHistory: [
        { bookName: 'The Great Gatsby', borrowDate: '2023-11-12', returnDate: '2023-11-19' },
        { bookName: '1984', borrowDate: '2023-10-20', returnDate: '2023-10-27' },
        { bookName: 'War and Peace', borrowDate: '2023-09-15', returnDate: '2023-09-22' }
    ]
};

const Library = () => {
    const [activeTab, setActiveTab] = useState('user'); // Tracks which tab is active
    const [cart, setCart] = useState([]); // Tracks books added to the cart
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isAddBookOpen,setIsAddBookOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
    const toggleAddBook = () => setIsAddBookOpen(!isAddBookOpen);

    const fetchForUser = () => {
        setActiveTab('user');
    };

    const addToCart = (book) => {
        // Check if the book is already in the cart
        if (!cart.find((item) => item.id === book.id)) {
            setCart([...cart, book]);
        }
    };

    const removeFromCart = (bookId) => {
        setCart(cart.filter((item) => item.id !== bookId));
    };

    return (
        <div className="library-container">
            {/* Header with Cart */}
            {activeTab === 'user' && (
                <div className="cart">
                    <button className="cart-button" onClick={toggleCart}>
                        Cart ({cart.length})
                    </button>
                    {/* Cart Dropdown */}
                    {isCartOpen && (
                        <div className="modal-overlay" onClick={toggleCart}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <h2 className="modal-heading">Your Cart</h2>
                                {cart.length > 0 ? (
                                    <div className="cart-items">
                                        {cart.map((item) => (
                                            <div key={item.id} className="cart-item">
                                                <p>{item.name}</p>
                                                <button
                                                    className="remove-button"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Your cart is empty.</p>
                                )}
                                <div className="modal-actions">
                                    <button className="close-modal" onClick={toggleCart}>
                                        Close
                                    </button>
                                    {cart.length > 0 && (
                                        <button className="proceed-button" onClick={() => alert('Proceeding to borrow')}>
                                            Proceed to Borrow
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'user' && (
                <div className="profile">
                    <button className="profile-button" onClick={toggleProfile}>Profile</button>
                    {isProfileOpen && (
                        <div className="modal-overlay" onClick={toggleProfile}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <h2 className="modal-heading">Your Profile</h2>

                                {/* User Profile Section */}
                                <div className="profile-header">
                                    <div className="profile-pic">
                                        <img src="https://static.vecteezy.com/system/resources/previews/028/794/707/non_2x/cartoon-cute-school-boy-photo.jpg" alt="Profile" />
                                    </div>
                                    <div className="user-info">
                                        <p><strong>Name:</strong> {userProfile.name}</p>
                                        <p><strong>Email:</strong> {userProfile.email}</p>
                                        <p><strong>Joined:</strong> {userProfile.joinedDate}</p>
                                    </div>
                                </div>

                                {/* Borrowing History Section */}
                                <div className="borrowing-history">
                                    <h3>Borrowing History</h3>
                                    {userProfile.borrowingHistory.length > 0 ? (
                                        <table className="history-table">
                                            <thead>
                                                <tr>
                                                    <th>Book Name</th>
                                                    <th>Borrowed On</th>
                                                    <th>Returned On</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userProfile.borrowingHistory.map((record, index) => (
                                                    <tr key={index}>
                                                        <td>{record.bookName}</td>
                                                        <td>{record.borrowDate}</td>
                                                        <td>{record.returnDate}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No borrowing history available.</p>
                                    )}
                                </div>

                                {/* Close Button */}
                                <button className="close-profile" onClick={toggleProfile}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            )}


{activeTab === 'admin' && (
    <div className="addBook">
        <button className="addBook-button" onClick={toggleAddBook}>Add Book</button>
        {isAddBookOpen && (
            <div className="modal-overlay" onClick={toggleAddBook}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2 className="modal-heading">Add Book</h2>
                    <form className="add-book-form">
                        {/* Form Field Wrappers for Better Spacing */}
                        <div className="input-group">
                            <label htmlFor="book-image">Image URL</label>
                            <input
                                type="url"
                                id="book-image"
                                name="image"
                                placeholder="Enter image URL"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="book-name">Book Name</label>
                            <input
                                type="text"
                                id="book-name"
                                name="name"
                                placeholder="e.g., 1984"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="book-author">Author</label>
                            <input
                                type="text"
                                id="book-author"
                                name="author"
                                placeholder="e.g., George Orwell"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="book-categories">Categories</label>
                            <input
                                type="text"
                                id="book-categories"
                                name="categories"
                                placeholder="e.g., Dystopian, Fiction"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="book-availableCopies">Available Copies</label>
                            <input
                                type="number"
                                id="book-availableCopies"
                                name="availableCopies"
                                placeholder="Enter number"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="book-leftCopies">Left Copies</label>
                            <input
                                type="number"
                                id="book-leftCopies"
                                name="leftCopies"
                                placeholder="Enter number"
                                required
                                className="input-field"
                            />
                        </div>

                        {/* Form Action Buttons */}
                        <div className="form-actions">
                            <button
                                type="button"
                                className="submit"
                                onClick={toggleAddBook}
                            >
                                Add Book
                            </button>
                            <button
                                type="button"
                                className="close-profiles"
                                onClick={toggleAddBook}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
)}

            {/* Tabs Navigation */}
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
                    onClick={() => fetchForUser()}
                >
                    User
                </button>
                <button
                    className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('admin')}
                >
                    Admin
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === 'user' && (
                    <div className="user-tab">
                        <h2 className="tab-heading">User Available Books</h2>
                        <div className="container">
                            {books.map((book) => (
                                <div key={book.id} className="product-card">
                                    {book.tag && (
                                        <span className={`product-tag ${book.tagColor}`}>
                                            {book.tag}
                                        </span>
                                    )}
                                    <div className="image-wrapper">
                                        <img
                                            src={book.image}
                                            alt={book.name}
                                            className="product-image"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">{book.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                                    <div className="product-category-list">
                                        {book.categories.map((category, index) => (
                                            <span key={index} className="product-category">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="availability">
                                        <p>
                                            Available Copies:{' '}
                                            <span className="font-semibold">
                                                {book.availableCopies}
                                            </span>
                                        </p>
                                        <p>
                                            Left Copies:{' '}
                                            <span className="font-semibold">{book.leftCopies}</span>
                                        </p>
                                    </div>
                                    <button
                                        className="add-to-cart-button"
                                        onClick={() => addToCart(book)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'admin' && (
                    <div className="admin-tab">
                        <h2 className="tab-heading">Admin Dashboard</h2>
                        <div className="container">
                            {books.map((book) => (
                                <div key={book.id} className="product-card">
                                    {book.tag && (
                                        <span className={`product-tag ${book.tagColor}`}>
                                            {book.tag}
                                        </span>
                                    )}
                                    <div className="image-wrapper">
                                        <img
                                            src={book.image}
                                            alt={book.name}
                                            className="product-image"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">{book.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                                    <div className="product-category-list">
                                        {book.categories.map((category, index) => (
                                            <span key={index} className="product-category">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="availability">
                                        <p>
                                            Available Copies:{' '}
                                            <span className="font-semibold">
                                                {book.availableCopies}
                                            </span>
                                        </p>
                                        <p>
                                            Left Copies:{' '}
                                            <span className="font-semibold">{book.leftCopies}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Library;

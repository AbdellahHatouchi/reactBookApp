import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBook = createAsyncThunk('bookSlice/getBook', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const respo = await axios.get('https://json-server-book.herokuapp.com/books')
        return respo.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const addBook = createAsyncThunk('BookSlice/addBook', async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const {user} = getState()
    bookData = {...bookData,userName:user.name}
    try {
        const respo = await axios.post('https://json-server-book.herokuapp.com/books', bookData)
        return respo.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const DeleteBook = createAsyncThunk('BookSlice/deleteBook', async (bookId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        await axios.delete(`https://json-server-book.herokuapp.com/books/${bookId}`)
        return bookId
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const initialState = { books: [],book:null, isLoding: true, error: null }

const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        readBook: (state, action) => {
            state.book = state.books.filter((book) => book.id === action.payload)
        }
    },
    extraReducers: {
        [getBook.pending]: (state, action) => {
            state.isLoding = true
            state.error = null
        },
        [getBook.fulfilled]: (state, action) => {
            state.isLoding = false
            state.books = action.payload
        },
        [getBook.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoding = false
        },
        // -----------------------------------------------
        [addBook.pending]: (state, action) => {
            state.isLoding = true
            state.error = null
        },
        [addBook.fulfilled]: (state, action) => {
            state.isLoding = false
            state.books.push(action.payload)
        },
        [addBook.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoding = false
        },
        // ----------------------------------------
        [DeleteBook.pending]: (state, action) => {
            state.isLoding = true
            state.error = null
        },
        [DeleteBook.fulfilled]: (state, action) => {
            state.isLoding = false
            state.books = state.books.filter(book => book.id !== action.payload);
            state.book = null
        },
        [DeleteBook.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoding = false
        },
    }
})
export const { readBook } = BookSlice.actions
export default BookSlice.reducer
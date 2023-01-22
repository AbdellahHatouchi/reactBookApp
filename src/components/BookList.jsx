import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../store/slice/bookSlice";
import Book from "./Book";
import nodata from '../image/undraw_No_data_re_kwbl.png'
import errorimg from '../image/undraw_server_down_s4lk.png'


export default function BookList() {
    const { books, isLoding, error } = useSelector(state => state.books)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBook())
    }, [dispatch])
    return (
        <div className="content col-12 col-md-6 mt-4 h-100">
            <h2>Book List</h2>
            {isLoding ? (<div>Loding...</div>) : (
                <div className="listbooks" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                    {error ?
                        <div className="error text-center mt-5">
                            <img src={errorimg} alt="No Data" width={250} />
                            <h1>Opps !</h1>
                            <p>{error}</p>
                        </div> :
                        books.length === 0 ?
                            <div className="error text-center mt-5">
                                <img src={nodata} alt="No Data" width={250} />
                                <h3>List book is Empty</h3>
                                <p>add your book</p>
                            </div> : books.map(item => <Book key={item.id} data={item} />)}
                </div>
            )
            }
        </div>
    )
}
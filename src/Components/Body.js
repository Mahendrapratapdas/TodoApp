import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Card = lazy(() => import("./Card"));
const Loading = lazy(() => import("./Loading"));
const GET_TODO = process.env.REACT_APP_GET_TODO;
const POST_DATA = process.env.REACT_APP_POST_TODO;
const PUT_DATA = process.env.REACT_APP_PUT_TODO;
const DELETE_DATA = process.env.REACT_APP_DELETE_TODO;

const Body = () => {
    const [todo, SetTodo] = useState([]);
    const [addTodo, setAddTodo] = useState({ title: "", descriptions: "", completed: false });
    const Exist = localStorage.getItem("exist");

    const fetchApi = async () => {
        try {
            const response = await axios.get(GET_TODO)
            SetTodo(response?.data)
        } catch (e) {
            console.log(e)
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: {Bounce},
            });
        }
    }

    const handelAddTodo = async () => {
        if (addTodo.title.length === 0) {
            toast.info("Title can't be empty", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: {Bounce},
            });
            return;
        }
        try {
            const response = await axios.post(POST_DATA, addTodo)
            if (response.status === 201) {
                fetchApi();
                toast.success("Todo Add successfully!!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    // transition: {Bounce},
                });
                setAddTodo({ ...addTodo, title: "", descriptions: "" })
            }
        } catch (e) {
            console.log(e)
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setAddTodo({ ...addTodo, title: "", descriptions: "" })
        }

    }

    const updateTodo = async (index) => {
        const todos = todo.find((item) => item.id === index)
        if (!todos) {
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: {Bounce},
            });
        }
        const body = { ...todos, completed: !todos.completed }
        const url = PUT_DATA + index + "/"
        try {
            const response = await axios.put(url, body)
            if (response.status === 200) {
                fetchApi();
                toast.success("Update successfully!!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch {
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }

    const deleteTodo = async (index) => {
        const todos = todo.find((item) => item.id === index)
        if (!todos) {
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: {Bounce},
            });
        }
        const url = DELETE_DATA + index + "/";
        try {
            const response = await axios.delete(url)
            console.log(response)
            if (response.status === 204) {
                fetchApi();
                toast.success("Delete successfully!!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (e) {
            console.log(e)
            toast.error("Oops.. something went wrong!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: {Bounce},
            });
        }

    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className="m-5">
            <h1 className="font-bold text-center text-xl text-red-950">{Exist ? "🚀 Welcome Back 🧠" : "Hi !! Welcome 🚀💻"}</h1>
            <ToastContainer />
            <div className="flex flex-wrap items-center justify-center m-4">
                <div className="flex flex-col mx-4">
                    <label htmlFor="title" className="font-medium mb-1">Title</label>
                    <input
                        id="title"
                        className="border-2 rounded-md h-9 w-56 px-2 outline-none focus:ring-2 focus:ring-blue-300"
                        style={{ borderColor: "black" }} // Apply red border on error
                        value={addTodo.title}
                        onChange={(e) => setAddTodo({ ...addTodo, title: e.target.value })}
                    />
                </div>

                <div className="flex flex-col mx-4">
                    <label htmlFor="description" className="font-medium mb-1">Description</label>
                    <input
                        id="description"
                        className="border-2 rounded-md h-9 w-56 px-2 outline-none focus:ring-2 focus:ring-blue-300"
                        style={{ borderColor: "black" }} // Apply red border on error
                        value={addTodo.descriptions}
                        onChange={(e) => setAddTodo({ ...addTodo, descriptions: e.target.value })}
                    />
                </div>

                <button className="bg-blue-400 w-32 h-9 rounded-md mt-6" onClick={handelAddTodo}>
                    <span className="font-bold text-lg">Add Todo</span>
                </button>
            </div>
            <div className="mt-9 flex flex-wrap gap-4 items-center justify-center">
                {todo.length === 0 ? (
                    // Show this message when there are no todos
                    <div className="text-gray-500 text-3xl font-semibold flex flex-col items-center mt-6 font-serif">
                        <p >Nothing to do ? 😒</p>
                        <p className="mt-2 text-red-400">Time to add some tasks !! 📝</p>
                    </div>

                ) : (
                    <Suspense fallback={<div className="flex justify-center items-center"><Loading /></div>}>
                        {todo.map((item) => (
                            <Card key={item.id} data={item} updateTodo={() => updateTodo(item.id)} deleteTodo={() => deleteTodo(item.id)} />
                        ))}
                    </Suspense>
                )}
            </div>
        </div>
    )
}

export default Body;
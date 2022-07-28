import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Alex']
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={()=>addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const memoizedAddBook = useCallback(
        () => {
            const newUser = [...books, 'Angular']
            setBooks(newUser)
        }, [books]
    )

    const memoizedAddBook2 = useMemo(() => {
        return () => {
            const newUser = [...books, 'Angular']
            setBooks(newUser)
        }
    }, [books])

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        {counter}
        <Books books={newArray} addBook={memoizedAddBook}/>
    </>
}

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={()=>props.addBook()}>addUser</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)
'use client'
import { Todo } from '@prisma/client'
import React from 'react'
import { TodosItem } from '..'
import { toggleTodo } from '../actions/todo-action'

interface Props{
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

    //const router = useRouter()

    /* const toggleTodo = async (id: string, complete: boolean) => {
        const todo = await updateComplete(id, complete)
        router.refresh()
    } */
    return (
        <div className='flex flex-col gap-4 flex-wrap  md:flex-row'>
            {todos.map(item => (
                <TodosItem key={item.id} todo={item} toggleTodo={toggleTodo} />
    ))}
        </div>
  )
}

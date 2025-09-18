import React from 'react'
type User = {
   name: string,
   age: number
}
export default function User({users} : {users: User[]}) {
  return (
    <div>
         {
            users.map((el, i) => (
                <li>{el.name} --- {el.age}</li>
            ))
         }
    </div>
  )
}

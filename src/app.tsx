import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { User } from "./types/user";


export function App() {
  const [users, setUsers] = useState<User[]>([])

  function formatDate(date: string) {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="max-w-5xl mx-auto my-6 px-4">
      <Header />
      <main className='my-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {users &&
          users.map((user, index) => (
            <Card
              key={index}
              img={user.imagens.resolucaoPadrao.url}
              username={user.usuario.username}
              link={user.link}
              likes={user.metadados.engagement}
              comments={user.comentarios}
              createAt={formatDate(user.criadoEm)} />
          ))}
      </main>
    </div>
  )
}

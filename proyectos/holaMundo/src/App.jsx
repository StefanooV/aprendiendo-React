import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas Etchenique',
        isFollowing: true
    },
    {
        userName: 'Ange_perassi',
        name: 'Angelina Perassi',
        isFollowing: false
    },
]

export function App () { 
    return (
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing} 
                        name={name} />
                    )
                })
            }
        </section>   
    )
}
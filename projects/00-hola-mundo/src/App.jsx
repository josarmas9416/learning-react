import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false,
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    isFollowing: false,
  }
]

export function App() {
  return (
    <section className='App'>
      {users.map(user => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName} // Assuming userName is unique
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        );
      })}
    </section>
  );
}
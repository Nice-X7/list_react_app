import { Header } from "./components/Header"
import { Todos } from "./components/todo_list"

export const App = () => {
  return (
    <div className="project">
      <Header />
      <Todos />
    </div>
  )
}
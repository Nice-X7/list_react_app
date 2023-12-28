import { Header } from "./components/Header"
import { Kwest } from "./components/todo_list"

export const App = () => {
  return (
    <div className="project">
      <Header />
      <Kwest />
    </div>
  )
}
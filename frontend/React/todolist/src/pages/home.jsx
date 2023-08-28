import {
  Heading,
  Checkbox,
  IconButton,
  Button,
  Input,
  Text,
} from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import style from "./Home.module.css"
import { useState } from "react"

export default function Home() {
  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState([
    "Create Guest Experience mobile check-in",
    "Document Current CI/CD Process",
    "Perform Code Review for Pillow-Talk release",
  ])

  return (
    <div className={style.main}>
      <div className={style.todolist}>
        <Heading
          as="h3"
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
          color={"white"}
        >
          Chores ToDo List
        </Heading>
        <ul>
          {todos.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <Checkbox colorScheme="#6f9d8c" borderColor={"#6f9d8c"}>
                {item}
              </Checkbox>

              <IconButton
                variant={"outline"}
                colorScheme="red"
                icon={<DeleteIcon />}
              ></IconButton>
            </li>
          ))}
        </ul>
      </div>
      <hr color={"white"} />
      <div className={style.form}>
        <Heading
          style={{ textAlign: "center", margin: "30px 0" }}
          color={"white"}
          as="h5"
        >
          Done 0
        </Heading>
        <Text color={"white"} mb="8px">
          Add ToDo:{" "}
        </Text>
        <Input
          color={"white"}
          style={{ marginBottom: 20 }}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
          value={todo}
        />
        <Button
          bgColor={"blue.200"}
          onClick={() => {
            const newArray = [...todos, todo]
            setTodos(newArray)
            setTodo("")
          }}
        >
          Add Task
        </Button>
      </div>
    </div>
  )
}

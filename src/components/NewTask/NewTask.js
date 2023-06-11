import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;

    props.onAddTask(createTask);
  };
};

const enterTaskHandler = async (taskText) => {
  sendTaskRequest(
    {
      url: "",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
    },
    createTask.bind(null, taskText)
  );
};

return (
  <Section>
    <TaskForm onEnterTask={enterTaskHandler}></TaskForm>
  </Section>
);

export default NewTask;

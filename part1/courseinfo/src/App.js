const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

function Header(props) {
  return <h1>{props.course}</h1>
}

function Content(props) {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  )
}

function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  )
}

export default App

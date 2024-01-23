
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App(props){
  return(
    <div>
      <Welcome name = "박민서"/>
      <Welcome name = "겁나"/>
      <Welcome name = "노싸가지"/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
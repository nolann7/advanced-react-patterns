// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  return React.Children.map(props.children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on: on, toggle})
  })
  // 📜 https://react.dev/reference/react/Children
  // 📜 https://react.dev/reference/react/cloneElement
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => {
  return on ? children : null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  return on ? null : children
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle, ...props}) => {
  return <Switch on={on} onClick={toggle} {...props} />
}
function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}
// function App() {
//   return (
//     <div>
//       <Toggle>
//         <ToggleOn>The button is on</ToggleOn>
//         <ToggleOff>The button is off</ToggleOff>
//         <ToggleButton />
//       </Toggle>
//     </div>
//   )
// }

export default App

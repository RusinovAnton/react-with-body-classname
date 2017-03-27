# react-with-body-classname

High order component that applies `className` to the `<body/>`  
whether given component is mounted  

Usage:  
```
import withBodyClassName from 'react-with-body-classname'


class MyComponent extends React.Component {}

export default withBodyClassName('page--hasMyComponent')(MyComponent)
```
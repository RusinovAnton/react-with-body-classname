import React, { PureComponent } from 'react'

export default (bodyClassName) => WrappedComponent => {
  class withBodyClassNameHOC extends PureComponent {
    static body = document.getElementsByTagName('body')[0];

    componentDidMount() {
      withBodyClassNameHOC.body.classList.add(bodyClassName);
    }

    componentWillUnmount() {
      withBodyClassNameHOC.body.classList.remove(bodyClassName);
    }

    render() {
      return <WrappedComponent {...this.props } />
    }
  }

  return withBodyClassNameHOC
}

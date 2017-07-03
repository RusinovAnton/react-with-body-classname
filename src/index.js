import React, { PureComponent } from 'react'

export default (bodyClassName) => WrappedComponent => {
  class withBodyClassNameHOC extends PureComponent {
    static body = document.getElementsByTagName('body')[0];

    componentDidMount() {
      this.addClassName(bodyClassName);
    }

    componentWillUnmount() {
      this.removeClassName(bodyClassName);
    }

    addClassName = (className) => {
      withBodyClassNameHOC.body.classList.add(className)
    }

    removeClassName = (className) => {
      withBodyClassNameHOC.body.classList.remove(className)
    }

    render() {
      return <WrappedComponent {...this.props } addBodyClassName={this.addClassName}
                               removeBodyClassName={this.removeClassName}/>
    }
  }

  return withBodyClassNameHOC
}

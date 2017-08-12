import React, { Component } from 'react';

export default bodyClassName => WrappedComponent => {
  class withBodyClassNameHOC extends Component {
    static body = document.getElementsByTagName('body')[0];

    componentDidMount() {
      bodyClassName && this.addClassName(bodyClassName);
    }

    componentWillUnmount() {
      bodyClassName && this.removeClassName(bodyClassName);
    }

    addClassName = className => {
      withBodyClassNameHOC.body.classList.add(className);
    };

    removeClassName = className => {
      withBodyClassNameHOC.body.classList.remove(className);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          addBodyClassName={this.addClassName}
          removeBodyClassName={this.removeClassName}
        />
      );
    }
  }

  return withBodyClassNameHOC;
};

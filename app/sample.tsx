import * as React from 'react'

export class Sample extends React.PureComponent<any, any> {

  private editor: any

  constructor(props) {
    super(props)
  }

  // props and state both ready
  // can use for calling setState
  // most times just use constructor
  componentWillMount() {}

  // jQuery plugins?
  // DOM is ready here
  // Stand up plugins
  // ref is now a function
  // Dispatch actions
  componentDidMount() {}

  // Remove any event handlers or plugins
  // No leaks
  componentWillUnmount() {}

  // props have changes
  // NOT called on init
  // update state based on props
  // dispatch actions
  // be careful, can cause loops i.e. don't compare objects
  // Update state if props don't match
  // Very useful in React Router
  componentWillReceiveProps() {}

  // Tell component whether or not to render
  // can increase performance
  // used to call shallowCompare
  // MOST of the time, use React.PureComponent
  shouldComponentUpdate() : boolean {
    return true
  }

  // Called BEFORE render like when setState called
  // Do NOT call setState here
  // Useful for triggering CSS animations
  componentWillUpdate(){}

  // Gives you previous props PrevProps to compare before actions
  // Called AFTER render
  // Updates the DOM
  componentDidUpdate() {}

  render() {
    return (
      <div ref={(node) => {}}></div>
    )
  }
}
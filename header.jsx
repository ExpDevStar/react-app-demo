var Button = React.createClass({
  getInitialState: function () {
    return {show: false};
  },
  handleClick: function () {
    this.setState({show: !this.state.show});
  },
  render: function () {
    var str = this.state.show ? 'hello' : '';
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>{str}</p>
      </div>
    );
  }
});
React.renderComponent(
  <Button />,
  document.getElementById('example')
);

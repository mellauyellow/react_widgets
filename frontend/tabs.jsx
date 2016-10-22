import React from 'react';
class Tab extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      index: 0
    };
  }

  updateIndex(index) {
    this.setState({index});
  }

  render(){
    console.log(this.state.index);
    const tabs = this.props.tabs;
    let headers = tabs.map((tab, idx) => (
      <h1 onClick={this.updateIndex.bind(this, idx)}>{tab.title}</h1>
    ));

    let content = tabs.map(tab => (
        <article>{tab.content}</article>
    ));

    return (
      <div className="tab">
        <ul>
            {tabs.map((tab, idx) => (
              <li key={tab.title} className={this.state.index === idx ? "shown" : "hidden"}>{headers[idx]}</li>
            ))}
        </ul>
        {content[this.state.index]}
      </div>
    );
  }
}

export default Tab;

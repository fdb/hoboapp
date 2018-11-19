import React from 'react';
import './ModuleForm.css';

export default class ModuleForm extends React.Component {
  state = {
    title: '',
    explanation: '',
    exercise: '',
    evaluation: ''
  };

  render() {
    const { title, explanation, exercise, evaluation } = this.state;
    return (
      <form className="module-form">
        <header className="module-form__header">Add module</header>
        <div className="module-form__row">
          <label className="module-form__label">Module title</label>
          <input
            className="module-form__text"
            type="text"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        {this._renderTextarea('explanation', 'Explanation', explanation)}
        {this._renderTextarea('exercise', 'exercise', exercise)}
        {this._renderTextarea('evaluation', 'Evaluation', evaluation)}
        <div className="module-form__row module-form__actions">
          <button className="module-form__button" onClick={this.onCancel}>
            Cancel
          </button>
          <button className="module-form__button" onClick={this.onSubmit}>
            Add Module
          </button>
        </div>
      </form>
    );
  }

  _renderTextarea = (property, title, value) => {
    return (
      <div className="module-form__row">
        <label className="module-form__label">{title}</label>
        <textarea
          className="module-form__textarea"
          value={value}
          onChange={e => this.setState({ [property]: e.target.value })}
        />
      </div>
    );
  };

  onCancel = e => {
    e.preventDefault();
    this.props.onCancel();
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, explanation, exercise, evaluation } = this.state;
    this.props.onSubmit({ title, explanation, exercise, evaluation });
  };
}

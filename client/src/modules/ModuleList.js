import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import AppHeader from '../shared/AppHeader';
import AdminBar from '../shared/AdminBar';
import ModuleStore from './ModuleStore';
import ModuleForm from './ModuleForm';
import Loader from '../shared/Loader';
import './ModuleList.css';

const STEP_EXPLANATION = 'explanation';
const STEP_EXERCISE = 'exercise';
const STEP_EVALUATION = 'evaluation';

export default class ModuleList extends React.Component {
  state = {
    modules: [],
    activeModuleId: undefined,
    activeStep: STEP_EXPLANATION,
    isLoading: true,
    isAdmin: true,
    isAddingModule: false
  };

  async componentDidMount() {
    const modules = await ModuleStore.getModules();
    let activeModuleId;
    if (modules.length > 0) {
      activeModuleId = modules[0]._id;
    }
    this.setState({ modules, activeModuleId, isLoading: false });
  }

  render() {
    const { isLoading, modules, isAdmin, isAddingModule } = this.state;

    if (isLoading) {
      return <Loader fullscreen={true} />;
    }

    const moduleComponents = modules.map(this._renderModule);
    return (
      <div>
        <AppHeader />
        {isAdmin && this._renderAdminBar()}
        {isAddingModule && this._renderAddModuleForm()}
        <div className="module-list">{moduleComponents}</div>
      </div>
    );
  }

  _renderModule = module => {
    const { activeModuleId, activeStep } = this.state;
    const isActive = module._id === activeModuleId;
    return (
      <div className="module" key={module._id}>
        <div className="module__title">
          <h2>{module.title}</h2>
        </div>
        {isActive && (
          <div className="module__body">
            {this._renderStep(
              'Explanation',
              'module__explanation',
              module.explanation,
              activeStep === STEP_EXPLANATION
            )}
            {this._renderStep('Exercise', 'module__exercise', module.exercise, activeStep === STEP_EXERCISE)}
            {this._renderStep('Evaluation', 'module__evaluation', module.evaluation, activeStep === STEP_EVALUATION)}
          </div>
        )}
      </div>
    );
  };

  _renderStep = (title, className, body, expanded) => {
    const stepBodyClass = classNames('module__step-body', className, { expanded });
    return (
      <div className="module__step">
        <h3>{title}</h3>
        <div className={stepBodyClass}>
          <div dangerouslySetInnerHTML={{ __html: body }} />
          <button onClick={this.onNextStep}>Next Step</button>
        </div>
      </div>
    );
  };

  onNextStep = () => {
    const { activeStep } = this.state;
    if (activeStep === STEP_EXPLANATION) {
      this.setState({ activeStep: STEP_EXERCISE });
    } else if (activeStep === STEP_EXERCISE) {
      this.setState({ activeStep: STEP_EVALUATION });
    } else if (activeStep === STEP_EVALUATION) {
      this.onNextModule();
    }
  };

  onNextModule = () => {
    const { modules, activeModuleId } = this.state;
    const moduleIndex = modules.findIndex(module => module._id === activeModuleId);
    const nextModule = modules[moduleIndex + 1];
    let newModuleId;
    if (nextModule) {
      newModuleId = nextModule._id;
    }
    this.setState({ activeModuleId: newModuleId, activeStep: STEP_EXPLANATION });
  };

  _renderAdminBar = () => {
    const actions = [{ title: 'Add Module', handler: this.onAddModule }];
    return <AdminBar actions={actions} />;
  };

  onAddModule = () => {
    this.setState({ isAddingModule: true });
  };

  _renderAddModuleForm = () => {
    return (
      <Modal isOpen={true} ariaHideApp={false}>
        <ModuleForm
          onCancel={() => this.setState({ isAddingModule: false })}
          onSubmit={module => this.addModule(module)}
        />
      </Modal>
    );
  };

  addModule = async module => {
    console.log(module);
    const newModule = await ModuleStore.createModule(module);
    this.setState(state => ({
      modules: [...state.modules, newModule],
      isAddingModule: false
    }));
  };
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default class ModuleStore {
  static async getModules() {
    const res = await fetch(`${API_URL}/modules`);
    const modules = await res.json();
    return modules;
  }

  static async createModule(module) {
    const res = await fetch(`${API_URL}/modules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(module)
    });
    const newModule = await res.json();
    return newModule;
  }
}

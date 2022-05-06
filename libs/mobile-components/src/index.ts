import packageJson from '../package.json';

export * from './components/Card';
export * from './components/Title';

export const version = () => packageJson.version;

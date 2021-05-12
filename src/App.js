import Files from './components/Files'
import {sampleFiles} from './utils/data'

import {wrapper} from './app.module.css'

function App() {
  return (
    <div className={wrapper}>
      <h3>Folder structure</h3>
       <Files files={sampleFiles}/>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import { registerSW } from 'virtual:pwa-register'
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import './index.css'
 /* 
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})  

updateSW()
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
    </Provider>
,
)




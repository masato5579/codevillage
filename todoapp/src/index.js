import ReactDOM from 'react-dom' //reactDomパッケージをインポート
import React from 'react' //reactパッケージをインポート
import App from './App'
import './css/Index.css'


// ReactDOM.render(<h1>TodoAPP</h1>, document.getElementById('root'))
//第1引数指定したreact要素を第2引数で指定したDOMに描写

ReactDOM.render(
    <App className="Approot" />,
    document.getElementById('root')
)








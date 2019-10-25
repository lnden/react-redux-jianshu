import React from 'react';
import Loadable from 'react-loadable'

//使用 Loadable 控制台出现警告，react生命周下个版本可能被废弃
const LoadableComponent = Loadable({
    // import 异步加载的新语法
    loader: () => import('./index.js'),
    loading() {
        return <div>正在加载···</div>
    }
});

export default () => <LoadableComponent/>
import {fromJS} from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/16129469-2f177ea79125209d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 1,
        title: '手绘制',
        imgUrl: '//upload-images.jianshu.io/upload_images/4437743-9f68ad720007169a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [{
        id: 1,
        title: '35岁以后你还能干啥？这是我看过最棒的建议！',
        desc: '你是否感觉日子漫长，无心工作？如果不能花时间来专注当下，不如花点时间来规划未来吧。无论你有没有毕业，无论你有没有过30岁，都建议读下这篇史上最好...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10986034-9c500f6294c43db1.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: '35岁以后你还能干啥？这是我看过最棒的建议！',
        desc: '你是否感觉日子漫长，无心工作？如果不能花时间来专注当下，不如花点时间来规划未来吧。无论你有没有毕业，无论你有没有过30岁，都建议读下这篇史上最好...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10986034-9c500f6294c43db1.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 3,
        title: '35岁以后你还能干啥？这是我看过最棒的建议！',
        desc: '你是否感觉日子漫长，无心工作？如果不能花时间来专注当下，不如花点时间来规划未来吧。无论你有没有毕业，无论你有没有过30岁，都建议读下这篇史上最好...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10986034-9c500f6294c43db1.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 4,
        title: '35岁以后你还能干啥？这是我看过最棒的建议！',
        desc: '你是否感觉日子漫长，无心工作？如果不能花时间来专注当下，不如花点时间来规划未来吧。无论你有没有毕业，无论你有没有过30岁，都建议读下这篇史上最好...',
        imgUrl: '//upload-images.jianshu.io/upload_images/10986034-9c500f6294c43db1.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    }, {
        id: 2,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    }, {
        id: 3,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    }, {
        id: 4,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }],
    writerList: [{
        id: 1,
        imgUrl: "http://upload.jianshu.io/users/upload_avatars/2594450/a5bbf755-a88e-42da-9eb7-eb4c0e895683.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        name: '小托夫',
        desc: '写了323.4k字 · 1.5k喜欢'
    }, {
        id: 2,
        imgUrl: "http://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        name: '王老师八卦美术史',
        desc: '写了323.4k字 · 1.5k喜欢'
    }, {
        id: 3,
        imgUrl: "http://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        name: '茶点故事',
        desc: '写了323.4k字 · 1.5k喜欢'
    }, {
        id: 4,
        imgUrl: "http://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        name: '格列柯南',
        desc: '写了323.4k字 · 1.5k喜欢'
    }, {
        id: 5,
        imgUrl: "http://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        name: '北落西门',
        desc: '写了323.4k字 · 1.5k喜欢'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
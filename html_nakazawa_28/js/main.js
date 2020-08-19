// jsを記述する際はここに記載していく

var app = new Vue({
    el: '.top-img',
    data: {
    title: '世界を変えるチーズを作ろう',
    text: 'チーズ職人養成学校「チーズアカデミーTOKYO」'
    },
    methods: {
        mouseOverAction(){
            this.title = '本気で世界を変えろ'
            this.text = 'できっこないをやらなくちゃ'
        }
    }
})

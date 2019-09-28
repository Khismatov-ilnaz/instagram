console.log('qwerqwer');

// абстрацкция - выкидываем все лишнее для решения задачи
const author = {
    id: 'buzova86',
    avatarUrl: 'https://scontent-arn2-1.cdninstagram.com/vp/e24c6f401983834e27247c3542022660/5E1B7CB0/t51.2885-19/s150x150/69672885_368328154091538_8485268536803983360_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com' ,
    verified: true,
}
const photo = {
    id: 'B23d82NooNF',
    author: author,
    location: 'Набережная Амура. Граница с Китаем',
    imageUrl: 'https://placekitten.com/500/500',
    videoUrl: null, //спец маркер
    likes: 159594,
}

const video = {
    id: 'ergw5415F',
    author: author,
    location: 'Торгово развлекательный центр',
    imageUrl: 'https://placekitten.com/500/500',
    videoUrl: 'https://youtube.com/...',
    likes: 159594,

}

console.log(photo.videoUrl);
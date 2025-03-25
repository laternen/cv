const texts = [
    'Сейчас я работаю SMM-щиком в Стилеру — IT-акселераторе Вышки: придумываю креативные идеи для контент-плана, пишу статьи и посты',
    'Последние полгода я занималась SMM вышкинского медиа о внеучебной деятельности «Экстра»:  писала посты для телеграм-канала и ВК.',
    'В проекте АПО мы создавали фестиваль о Шекспире и Мейерхольде. Я работала в SMM-треке, занималась созданием контент-плана, продвижением телеграм-канала и написанием постов.',
    'В студенческом проекте о кино «Четвертая стена» я также занималась написанием постов и созданием визуального оформления к ним'
]

const links = [
    'https://web.telegram.org/a/',
    'https://vk.com/?u=2&to=L2FsX2ZlZWQucGhw',
    'https://htmlacademy.ru/courses/273/run/25',
    'https://monkeytype.com/'
]

const textbox = document.querySelector('.experience_screen-text')
const buttons = document.querySelectorAll('.experience_list-item')
const exampleLink = document.querySelector('.experience_screen-link')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        textbox.textContent = texts[i];
        exampleLink.src = links[i];
    })
}

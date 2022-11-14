const shareIcons = document.getElementById('share-icons')
const iconsList = document.getElementById('icons-list')

shareIcons.addEventListener('click', () => {
    iconsList.classList.toggle('appear-share-icons')
})
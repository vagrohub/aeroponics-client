import GroupList from "../../GroupList";

const settings = {
    summary: 'настройки',
    render: () => {
        return (
            <GroupList list={
                [
                    ['Новое устройство', 'Новый эксперимент'],
                    ['Текущее устройство', 'Текущий эксперимент'],
                    ['Остановить эксперимент']
                ]
            } />
        )
    }
};
const device = {
    summary: 'устройство',
    render: () => {
        return (
            <GroupList list={
                [['Устройство 1', 'Устройство 22', 'Какое-то еще устройство']]}
            />
        )
    }
};
const experiment = {
    summary: 'эксперимент',
    render: () => {
        return (
            <GroupList list={
                [['Эксперимент 1', 'Эксепримент 22', 'Какой-то еще эксперимент']]}
            />
        )
    }
}

const detailsList = [settings, device, experiment];

export {
    detailsList
}
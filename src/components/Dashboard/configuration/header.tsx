import GroupList from "../../GroupList";

const settings = {
    summary: 'настройки',
    render: () => {
        return (
            <GroupList list={
                [
                    [<span>Новое устройство</span>, <span>Новый эксперимент</span>],
                    [<span>Текущее устройство</span>, <span>Текущий эксперимент</span>],
                    [<span>Остановить эксперимент</span>]
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
                [[<span>Устройство 1</span>, <span>Устройство 22</span>, <span>Какое-то еще устройство</span>]]}
            />
        )
    }
};
const experiment = {
    summary: 'эксперимент',
    render: () => {
        return (
            <GroupList list={
                [[<span>Эксперимент 1</span>, <span>Эксепримент 22</span>, <span>Какой-то еще эксперимент</span>]]}
            />
        )
    }
}

const detailsList = [settings, device, experiment];

export {
    detailsList
}
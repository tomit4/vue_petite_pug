function Counter(props) {
    return {
        $template: '#counter-template',
        count: props.initialCount,
        inc() {
            this.count++
        },
    }
}

function ListEm(props) {
    return {
        $template: '#list-template',
        listItem: props.someKind,
        li() {
            console.log(this.listItem)
        },
    }
}

PetiteVue.createApp({
    Counter,
}).mount()

PetiteVue.createApp({
    ListEm,
}).mount()

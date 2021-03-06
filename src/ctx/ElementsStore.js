import { observable, action, computed, autorun, when, reaction, decorate } from "mobx";

class ElementsStore {
    @observable elements = [];

    @observable draggingElem = null;

    constructor() {
        this.disposer = autorun(() => {
            if (this.draggingElem) console.log('%c%s', 'color: grey; font: 1.2rem/1 Tahoma;', `autorun-type: ${this.draggingElem.type}`);
        });

        when(
            () => this.draggingElem && this.draggingElem.type === 'circle',
            () => console.log('%c%s', 'color: yellow; font: 1.2rem/1 Tahoma;', 'when: First time create circle')
        );

        reaction(
            () => this.elements.length,
            (length) => console.log('%c%s', 'color: green; font: 1.2rem/1 Tahoma;', 'Reaction: ', length)
            
        )
    }

    @computed get elementsCount() {
        return this.elements.length;
    }

    @action('add element')
    addElement = element => {
        this.elements.push(element);
    }

    @action
    setDragging = element => {
        this.draggingElem = element;
    }
}

export default ElementsStore;

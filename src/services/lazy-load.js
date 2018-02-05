class LazyLoadService {

    constructor() {
        this.entries = [];
        this.offset  = 500;

        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    setOffset(offset) {
        this.offset = offset;
    }

    handleScroll() {
        let scroll = window.scrollY;
        let offset = scroll
            + Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            + this.offset;


        while (this.entries.length) {
            let current = this.entries[0];
            if (scroll + current.element.getBoundingClientRect().top > offset) {
                break;
            }

            current.callback();
            this.entries.shift();
        }
    }

    add(element, callback) {
        this.entries.push({element, callback});
        this.handleScroll();
    }
}

module.exports = new LazyLoadService();
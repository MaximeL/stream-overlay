export class Label {
    constructor(text: string, limit: number) {
        this.text = text;
        this.index = -10;
        this.length = text.length;
        this.limit = limit;
    }

    text: string;
    index: number;
    length: number;
    limit: number;

    display(): string {
        let begin: number;
        let end: number;
        if (this.index < 0) {
            begin = 0;
            end = this.limit;
        } else {
            begin = this.index;
            end = this.limit + this.index;
        }
        return this.text.substring(begin, end);
    }

    next() {
        if (this.length > this.limit) {
            this.index++;
            if (this.index > 0) {
                this.index = this.index % this.length;
                if (this.index === 0) {
                    this.index = -10;
                }
            }
        }
    }
}
export { };

function getParam(this: string, index: number): string {
    const params = this.split(',');

    if (index < 0 || params.length <= index) {
        return '';
    }

    return this.split(',')[index];
}


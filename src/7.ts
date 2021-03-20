function getParam(this: string, index: number): string {
    return '';
}

String.prototype.getParam = getParam;

interface String {
    getParam(this: string, index: number): string;
}
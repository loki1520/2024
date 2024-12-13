type Mods = Record<string, boolean | string>;

// export default function classNames(cls: string, mods?: Mods, additional?: string[]): string {
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className, value]) => className),
        ...additional.filter(Boolean), // Так как additional не обязательный, фильтруем
        // от попадания в classNames свойств undefinited
    ].join(' ');
}

// const result = classNames('button', { active: true, disabled: false, color: 'red' },
// ['extra-class', 'another-class'] );
// console.log(result); // "button active color extra-class another-class"

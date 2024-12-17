import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('test with additional params', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('test with mods', () => {
        expect(
            classNames('someClass', { classMod1: true, classMod2: true }, [
                'classAddit1',
                'classAddit2',
            ]),
        ).toBe('someClass classMod1 classMod2 classAddit1 classAddit2');
    });
    test('test with false mods', () => {
        expect(
            classNames('someClass', { classMod1: false, classMod2: undefined }, [
                'classAddit1',
                'classAddit2',
            ]),
        ).toBe('someClass classAddit1 classAddit2');
    });
});

// npm run unit classNames.test.ts

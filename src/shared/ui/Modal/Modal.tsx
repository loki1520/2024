import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(); // фича для определения типа возвращаемого значения, т.к. node и window вернут разные типы
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        setIsClosing(true);

        if (onClose) {
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown); // подписка на событие keydown. при нажатии на клавишу Escape закрывается модальное окно
        }
        return () => {
            clearTimeout(timerRef.current); // очистка таймера
            window.removeEventListener('keydown', onKeyDown); // тоже слушатель на событие keydown обязательно нужно очитить
        };
    }, [isOpen, onKeyDown]);

    // для предотвращения закрытия модальн окна (при нажатии внутри него)
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

// В коде параметр lazy в компоненте Modal управляет рендером модального окна.
// Когда мы устанавливаем lazy в true, это означает, что компонент модального окна не
// рендерится сразу при монтировании, а только когда оно открывается (то есть, когда
// isOpen равно true). Это достигается за счет условного рендеринга с использованием состояния isMounted.

// Как работает lazy:
// 	1.	Когда lazy установлено в true, при первом рендере модальное окно не отображается,
// если isOpen еще не равно true. Это позволяет избежать ненужных рендеров до тех пор, пока
// окно не станет видимым.
// 	2.	Когда isOpen становится true, мы обновляем состояние с помощью setIsMounted(true),
// и окно начинает рендериться.
// 	3.	Таким образом, элемент не рендерится сразу, что полезно для предотвращения лишних
// вычислений и рендеров до того момента, как они действительно понадобятся.

// Почему это влияет на фокус:

// Если в нашем компоненте есть поля ввода или другие элементы, которым требуется фокус,
//  и окно отрисовывается с задержкой (что происходит при использовании lazy), момент е
// го появления совпадает с моментом, когда фокус нужно поставить на первый элемент внутри
// модального окна. Это объясняет, почему фокус работает корректно при использовании lazy:
// окно появляется только тогда, когда оно действительно готово к взаимодействию, и фокус
// может быть правильно установлен в момент его открытия.

// Если бы окно рендерилось сразу, когда isOpen установлено в true, фокус мог бы не быть
// установлен вовремя, потому что модальное окно могло бы еще не быть готово к взаимодействию
// сразу после монтирования.

// Таким образом, использование lazy помогает отложить рендеринг модального окна до момента
// его открытия, что способствует более корректной работе с фокусом.

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
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(); // фича для определения типа возвращаемого значения, т.к. node и window вернут разные типы

    // Перделатьпозже:
    const { theme } = useTheme();

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
        // Перделатьпозже:
        [cls[theme]]: true,
    };

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

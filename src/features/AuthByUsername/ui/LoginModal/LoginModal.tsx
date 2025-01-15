import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy>
            <Suspense fallback={<Loader />}>
                {/* Ожидает завершения загрузки асинхронного компонента LoginFormAsync.
                Пока загрузка идет, вместо содержимого рендерится то,
                что указано в fallback */}
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};

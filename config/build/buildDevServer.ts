import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: false, // overlay-окно Webpack Dev Server, которое отображается в браузере, если при разработке приложения произошла ошибка выполнения (runtime error). Оно сообщает об ошибке, произошедшей в коде, и помогает разработчику быстрее ее найти
        },
    };
}

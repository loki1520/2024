import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {
    const Decorator = (StoryComponent: Story) => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );

    Decorator.displayName = 'ThemeDecorator';

    return Decorator;
};

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
//     <div className={`app ${theme}`}>
//         <StoryComponent />
//     </div>
// );
